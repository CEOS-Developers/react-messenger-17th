import { useState, useRef, useCallback } from "react";
import styled from "styled-components";

import ChatView from "../components/ChatRoomPage/ChatView";
import InsertMsg from "../components/ChatRoomPage/InsertMsg";
import UsersList from "../components/ChatRoomPage/UsersList";
import { getRoomMembers } from "../common/Custom";
import { Chat } from "../common/interface";

import userData from "../json/userData.json";
import chatData from "../json/chatRoom.json";
import { useNavigate, useParams } from "react-router-dom";

function Chatroom() {
  const navigate = useNavigate();

  const { id } = useParams<string>();
  const roomId: number = parseInt(id!);

  const curRoom = chatData.rooms[roomId];
  const [chats, setChats] = useState<Chat[]>(curRoom.chats);
  const users = userData.users;

  const [curUser, setCurUser] = useState(0);
  const nextChatId = useRef(chats.length + 1);

  const onConcat = useCallback(
    (text: string) => {
      const chat = {
        id: nextChatId.current,
        senderId: curUser,
        text,
        date: String(new Date()),
      };
      setChats(chats.concat(chat));
      nextChatId.current++;
    },
    [chats, curUser]
  );

  const changeUser = (id: number) => {
    setCurUser(id);
  };

  const roomMembers = getRoomMembers(roomId, true);

  return (
    <Wrapper>
      {/* <button onClick={() => navigate(-1)} /> */}
      <UsersList curUser={curUser} users={roomMembers} changeUser={changeUser} />
      <ChatView curUser={curUser} users={users} chats={chats} />
      <InsertMsg onConcat={onConcat} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 95vh;
  box-shadow: 1px 1px 2px 2px lightgrey;
  border-radius: 20px;
`;

export default Chatroom;