import { useCallback, useRef, useState } from 'react';
import { Chat } from '../interfaces/Interface';
import chatData from '../jsons/chatData.json';
import userData from '../jsons/userData.json';
import UserList from '../components/ChatRoom/UserList';
import ChatList from '../components/ChatRoom/ChatList';
import styled from 'styled-components';
import ChatInput from '../components/ChatRoom/ChatInput';
import { useParams } from 'react-router-dom';
import {User} from '../interfaces/Interface';

const Wrapper = styled.div`
  font-size: 13px;
  font-family: 'NanumL';
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 20px;
  border-radius: 20px;
  margin: 0 auto;
`;

function ChatRoom() {
  const {id} = useParams<string>();
  const roomId: number = parseInt(id!);

  const curRoom = chatData.chatRooms[roomId];
  const [chats, setChats] = useState<Chat[]>(curRoom.chats);
  const [userId, setUserId] = useState(0);
  
  const nextChatId = useRef(chats.length + 1);
  const users = userData.users;
  const me = userData.me;
  const all = me.concat(users);
  const chatRooms = chatData.chatRooms;

  const getRoomMember=(roomId: number, isCurUser: Boolean)=>{
    const roomMember: User[] = [];
    chatRooms[roomId].users.map((memberId) => roomMember.push(all[memberId]));
    if(!isCurUser){
      roomMember.shift();
    }
    console.log(roomMember);
    return roomMember;
  }
 
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
    },
    [chats, userId]
  );

  const changeUser = (id: number) => {
    setUserId(id);
  };

  const roomMember = getRoomMember(roomId, true);

  return (
    <Wrapper>
      <UserList userId={userId} users={roomMember} changeUser={changeUser} />
      <ChatList userId={userId} users={all} chats={chats} />
      <ChatInput addChat={addChat} />
    </Wrapper>
  );
}

export default ChatRoom;
