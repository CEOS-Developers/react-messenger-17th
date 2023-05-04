import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import { useLocation } from 'react-router-dom';

const ChatRoomPage = () => {
  const {
    state: { friendInfo, chatList },
  } = useLocation();

  return (
    <ChatRoomBox>
      <Header friendInfo={friendInfo} />
      <ChatList friendInfo={friendInfo} chatList={chatList} />
      <ChatInput />
    </ChatRoomBox>
  );
};

export default ChatRoomPage;

const ChatRoomBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
