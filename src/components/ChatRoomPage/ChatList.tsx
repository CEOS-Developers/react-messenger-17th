import React, { useEffect, useRef } from 'react';
import Chat from './Chat';
import { useRecoilValue } from 'recoil';
import { chatState } from '../../state/atom';
import styled from 'styled-components';

const ChatList = () => {
  const chats = useRecoilValue(chatState);
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
      {chats.map((chat, idx) => (
        <Chat key={idx} {...chat} />
      ))}
    </ChatListBox>
  );
};

export default ChatList;

const ChatListBox = styled.div`
  flex-basis: 80%;
  overflow-y: auto;
`;
