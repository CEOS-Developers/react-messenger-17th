import React, { useEffect, useRef } from 'react';
import Chat from './Chat';
//import { useRecoilValue } from 'recoil';
//import { chatState } from '../../state/atom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { IChat } from '../../interface/interface';

const ChatList = () => {
  const {
    state: { chatList },
  } = useLocation();

  //const chats = useRecoilValue(chatState);
  const chatListRef = useRef<HTMLDivElement>(null);

  const moveToBottom = () => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    moveToBottom();
  });

  return (
    <ChatListBox ref={chatListRef}>
      {chatList.map((chat: IChat, idx: number) => (
        <Chat key={idx} {...chat} />
      ))}
    </ChatListBox>
  );
};

export default ChatList;

const ChatListBox = styled.div`
  flex-basis: 80%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.32rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b5b4b4;
  }
`;
