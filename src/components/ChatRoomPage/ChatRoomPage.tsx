import React from 'react';
//import styled from 'styled-components';
import Header from './Header';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

const ChatRoomPage = () => {
  return (
    <div>
      <Header />
      <ChatList />
      <ChatInput />
    </div>
  );
};

export default ChatRoomPage;
