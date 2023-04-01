import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Chat, User } from "../../common/interface";
import ChatItem from "./ChatItem";

interface ChatListProps {
  curUser: number;
  chats: Chat[];
  users: User[];
}

const ChatView = ({ curUser, chats, users }: ChatListProps) => {
  const chatListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  }, [chats]);

  return (
    <Wrapper ref={chatListRef}>
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          isCurUser={curUser === chat.senderId}
          chat={chat}
          sender={users[chat.senderId]}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
  height: 65%;
  overflow: auto;
  background-color: lightyellow;
  &::-webkit-scrollbar{
    width : 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%;
    background-color: rgb(200, 240, 250);
    border-radius: 8px;
  }
`;

export default ChatView;