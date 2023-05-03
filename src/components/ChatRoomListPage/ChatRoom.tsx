import React from 'react';

type ChatRoomProps = {
  userName: string;
  userImg: string;
  lastMessage: string;
  lastTime: string;
};
const ChatRoom = ({
  userName,
  userImg,
  lastMessage,
  lastTime,
}: ChatRoomProps) => {
  return (
    <div>
      <p>{userName}</p>
      <p>{lastMessage}</p>
      <p>{lastTime}</p>
    </div>
  );
};

export default ChatRoom;
