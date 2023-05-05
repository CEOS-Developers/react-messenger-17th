import React from 'react';
import ChatRoomList from './ChatRoomList';
import styled from 'styled-components';

const ChatRoomListPage = () => {
  return (
    <div>
      <Header>
        <h1>채팅</h1>
      </Header>

      {/*
      <p>최신 메시지 순</p>
      <p>오래된 메시지 순</p>
      */}

      <ChatRoomList />
    </div>
  );
};

export default ChatRoomListPage;

const Header = styled.header`
  font-family: 'IBMPlexSansKR-Regular';
  padding: 0 1.5rem;
`;
