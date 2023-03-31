import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

const ChatRoomPage = () => {
  return (
    <ChatRoomBox>
      <Header />
      <ChatList />
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
