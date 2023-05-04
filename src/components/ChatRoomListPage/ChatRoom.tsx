import React from 'react';
import { IChat } from '../../interface/interface';

type ChatRoomProps = {
  userName: string;
  userImg: string;
  chatList: IChat[];
};

const ChatRoom = ({ userName, userImg, chatList }: ChatRoomProps) => {
  const lastChat = chatList[chatList.length! - 1];

  return (
    <div>
      <p>{userName}</p>
      <p>{lastChat.content}</p>
      <p>{lastChat.time}</p>
    </div>
  );
};

export default ChatRoom;
