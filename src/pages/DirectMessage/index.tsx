import ChatList from '../../components/ChatList';
import useInput from '../../hooks/useInput';

import { DragOver } from '../Channel/style';

import { Header, Container } from '../Channel/style';
import { IDM, IUser } from '../../typings/db';
import ChatBox from 'src/components/ChatBox';
import makeSection from '../../utils/makeSection';
import gravatar from 'gravatar';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import chatDataJson from '../../db/chatData.json';
import userData from '../../db/userData.json';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atom';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();

  const [chatData, setChatData] = useState<IDM[]>(chatDataJson);
  const [chat, onChangeChat, setChat] = useInput('');
  const scrollbarRef = useRef<Scrollbars>(null);
  const [dragOver, setDragOver] = useState(false);
  const [myData, setMyData] = useRecoilState<IUser>(userState);

  const isEmpty = chatData.length === 0;

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

  return (
    <Container onDragOver={onDragOver}>
      <Header>
        <img src={gravatar.url(userData.email, { s: '24px', d: 'retro' })} alt={userData.nickname} />
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
