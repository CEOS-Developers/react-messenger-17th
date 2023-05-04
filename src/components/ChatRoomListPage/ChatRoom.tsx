import React from 'react';
import { IChat } from '../../interface/interface';
import { useNavigate } from 'react-router-dom';

type ChatRoomProps = {
  userId: number;
  userName: string;
  userImg: string;
  chatList: IChat[];
};

const ChatRoom = ({ userId, userName, userImg, chatList }: ChatRoomProps) => {
  const navigate = useNavigate();
  const lastChat = chatList[chatList.length! - 1];

  return (
    <div
      onClick={() => {
        navigate(`/chatrooms/${userId}`, { state: { chatList } });
      }}
    >
      <p>{userName}</p>
      <p>{lastChat.content}</p>
      <p>{lastChat.time}</p>
    </div>
  );
};

export default ChatRoom;
