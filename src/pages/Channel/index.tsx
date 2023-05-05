import React, { useCallback, useEffect, useRef, useState } from 'react';
import Workspace from 'src/layouts/Workspace';
import { Container, Header } from './style';
import ChatBox from '../../components/ChatBox';
import ChatList from '../../components/ChatList';
import { IChat } from 'src/typings/db';
import { useParams } from 'react-router';
import ChannelChatJson from '../../db/channelChatData.json';
import { toast, ToastContainer } from 'react-toastify';
import makeSection from 'src/utils/makeSection';
type ChannelChatDataType = {
  [workspace: string]: {
    [channel: string]: IChat[];
  };
};
export default function Channel() {
  const ChannelChatData: ChannelChatDataType = ChannelChatJson;

  const { workspace, channel } = useParams();

  useEffect(() => {
    setChatData(workspace && channel && ChannelChatData[workspace][channel]);
  }, [workspace, channel]);
  const [chatData, setChatData] = useState(workspace && channel && ChannelChatData[workspace][channel]);
  console.log(chatData);
  const scrollbarRef = useRef(null);
  const isEmpty = chatData?.length === 0;
  const isReachingEnd = false;
  const chatSections = makeSection(chatData ? ([] as IChat[]).concat(...chatData).reverse() : []);

  const onClickInviteChannel = useCallback(() => {
    alert('공사중입니다.');
  }, []);
  return (
    <Container>
      <Header>
        <span>#{channel}</span>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <span>10</span>
          <button
            onClick={onClickInviteChannel}
            className="c-button-unstyled p-ia__view_header__button"
            aria-label="Add people to #react-native"
            data-sk="tooltip_parent"
            type="button"
          >
            <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" aria-hidden="true" />
          </button>
        </div>
      </Header>
      <ChatList
        scrollbarRef={scrollbarRef}
        isReachingEnd={isReachingEnd}
        isEmpty={isEmpty}
        chatSections={chatSections}
      />
      {/** <ChatBox
        onSubmitForm={onSubmitForm}
        chat={chat}
        onChangeChat={onChangeChat}
        placeholder={`Message #${channel}`}
        data={channelMembersData}
      />
      <InviteChannelModal
        show={showInviteChannelModal}
        onCloseModal={onCloseModal}
        setShowInviteChannelModal={setShowInviteChannelModal}
      />*/}

      <ToastContainer position="bottom-center" />
    </Container>
  );
}
