import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChatItem from './ChatItem';
import { Chat, User } from './Interfaces';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  height: 70%;
  overflow: auto;
  background-color: #a4c3df;
  ::-webkit-scrollbar {
    width: 1px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

interface ChatListProps {
  userId: number;
  chats: Chat[];
  users: User[];
}

function ChatList({ userId, chats, users }: ChatListProps) {
  const chatListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  }, [chats]);

  return (
    <Wrapper ref={chatListRef}>
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          isUser={userId === chat.userId}
          chat={chat}
          sender={users[chat.userId]}
        />
      ))}
    </Wrapper>
  );
}

export default ChatList;
