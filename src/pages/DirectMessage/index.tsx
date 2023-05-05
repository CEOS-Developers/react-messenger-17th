import ChatList from '../../components/ChatList';
import useInput from '../../hooks/useInput';

import { DragOver } from '../Channel/style';
import { Container, Header } from './style';
import { IDM, IUser } from '../../typings/db';
import ChatBox from 'src/components/ChatBox';
import makeSection from '../../utils/makeSection';
import gravatar from 'gravatar';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import userDataJson from '../../db/userData.json';

import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atom';
import channelDMChatDataJson from '../../db/channelDMChatList.json';

type ChannelDMChatDataType = {
  [userId: string]: IDM[];
};

type ChatPartnerDataType = {
  [userId: string]: IUser;
};
const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();

  const channelDMChatData: ChannelDMChatDataType = channelDMChatDataJson;
  const chatPartnerData: ChatPartnerDataType = userDataJson;

  // DM 대화내역 가져올때
  // 1. 각각의 dm의 고유 번호 할당하기
  // 2. 대화상대 id로 dm 가져오기 -> 서로 다른 채널에서 같은 dm 내역 공유
  // 둘 중 어느 방법이 더 좋은 방법일까요?

  const [chatData, setChatData] = useState(id && channelDMChatData[id]);

  useEffect(() => {
    console.log(id && channelDMChatData[id]);
    setChatData(id && channelDMChatData[id]);
    if (id) {
      setUserData(chatPartnerData[id]);
    }
  }, [id]);

  const [chat, onChangeChat, setChat] = useInput('');
  const scrollbarRef = useRef<Scrollbars>(null);
  const [dragOver, setDragOver] = useState(false);
  const [myData, setMyData] = useRecoilState<IUser>(userState);
  const [userData, setUserData] = useState<IUser>({
    id: 811,
    nickname: '김서연',
    email: '서연@gmail.com',
  }); //대화 상대
  const isEmpty = chatData?.length === 0;

  const onSubmitForm = useCallback(
    (e: any) => {
      e.preventDefault();
      if (chat?.trim() && chatData) {
        var newChat: IDM = {
          id: (chatData[chatData.length - 1]?.id || 0) + 1,
          content: chat,
          SenderId: myData.id,
          Sender: myData,
          ReceiverId: userData.id,
          Receiver: userData,
          createdAt: String(new Date()),
        };
        setChatData([newChat, ...chatData]);

        localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
        setChat('');
        if (scrollbarRef.current) {
          console.log('scrollToBottom!', scrollbarRef.current?.getValues());
          scrollbarRef.current.scrollToBottom();
        }
      }
    },
    [chat, workspace, id, userData, chatData, setChat],
  );

  useEffect(() => {
    localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
  }, [workspace, id]);

  const onDragOver = useCallback((e: any) => {
    e.preventDefault();
    console.log(e);
    setDragOver(true);
  }, []);

  if (!userData || !myData) {
    return null;
  }

  const chatSections = makeSection(chatData ? ([] as IDM[]).concat(...chatData).reverse() : []);

  const onChangeUser = () => {
    alert('change user');
    var savedMyData = myData;
    setMyData(userData);
    setUserData(savedMyData);
  };
  console.log('내데이터', myData);
  return (
    <Container onDragOver={onDragOver}>
      <Header>
        <img
          onClick={onChangeUser}
          style={{ cursor: 'pointer' }}
          src={gravatar.url(userData.email, { s: '24px', d: 'retro' })}
          alt={userData.nickname}
        />
        <span>{userData.nickname}</span>
      </Header>
      <ChatList scrollbarRef={scrollbarRef} isEmpty={isEmpty} chatSections={chatSections} />
      <ChatBox
        onSubmitForm={onSubmitForm}
        chat={chat}
        onChangeChat={onChangeChat}
        placeholder={`Message ${userData.nickname}`}
        data={[]}
      />
      {dragOver && <DragOver>업로드!</DragOver>}
    </Container>
  );
};

export default DirectMessage;
