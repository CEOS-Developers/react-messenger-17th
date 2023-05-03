import { useState, useRef, useCallback } from "react";
import styled from "styled-components";

import ChatView from "../components/ChatRoomPage/ChatView";
import InsertMsg from "../components/ChatRoomPage/InsertMsg";
import UsersList from "../components/ChatRoomPage/UsersList";
import { getRoomMembers } from "../common/Custom";
import { Chat } from "../common/interface";

import { MdOutlineCancel } from "react-icons/md";

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
      <Header>
        <Button onClick={() => navigate(-1)}> 
          <MdOutlineCancel size="20"/>
        </Button>
        <UsersList curUser={curUser} users={roomMembers} changeUser={changeUser} />
      </Header>
      <ChatView curUser={curUser} users={users} chats={chats} />
      <InsertMsg onConcat={onConcat} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 43rem;
  margin-top: 10px;
  box-shadow: 5px 5px 5px 5px rgb(200, 200, 200);
  background-color: #FEF8F2;
  border-radius: 20px;
  &::-webkit-scrollbar{
        width : 10px;
    }
    &::-webkit-scrollbar-thumb {
        height: 30%;
        background-color: #95B3FF;
        border-radius: 10px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #95B3FF;
    border-radius: 20px 20px 0px 0px;
`;


const Button = styled.button`
    all: unset;
    cursor: pointer;
    margin-left: 0.8rem;
`;

export default Chatroom;