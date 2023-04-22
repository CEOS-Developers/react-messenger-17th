import { useCallback, useRef, useState } from 'react';
import { Chat } from '../interfaces/Interface';
import chatData from '../jsons/chatData.json';
import userData from '../jsons/userData.json';
import UserList from './UserList';
import ChatList from './ChatList';
import styled from 'styled-components';
import ChatInput from '../components/ChatInput';

const Wrapper = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 20px;
  border-radius: 20px;
  margin: 0 auto;
`;

function ChatRoom() {
  const [chats, setChats] = useState<Chat[]>(chatData.chats);
  const [userId, setUserId] = useState(0);
  const nextChatId = useRef(chatData.chats.length + 1);
  const users = userData.users;

  const addChat = useCallback(
    (text: string) => {
      const chat = {
        id: nextChatId.current,
        userId: userId,
        text,
        date: String(new Date()),
      };
      setChats(chats.concat(chat));
      nextChatId.current++;
      console.log(chat);
    },
    [chats, userId]
  );

  const changeUser = (id: number) => {
    setUserId(id);
  };

  return (
    <Wrapper>
      <UserList userId={userId} users={users} changeUser={changeUser} />
      <ChatList userId={userId} users={users} chats={chats} />
      <ChatInput addChat={addChat} />
    </Wrapper>
  );
}

export default ChatRoom;
