import React from 'react';
import { IChat, IUser } from '../../interface/interface';
import { useNavigate } from 'react-router-dom';

type ChatRoomProps = {
  friendInfo: IUser;
  chatList: IChat[];
};

const ChatRoom = ({ friendInfo, chatList }: ChatRoomProps) => {
  const navigate = useNavigate();
  const lastChat = chatList[chatList.length! - 1];

  return (
    <div
      onClick={() => {
        navigate(`/chatrooms/${friendInfo.userId}`, {
          state: { friendInfo, chatList },
        });
      }}
    >
      <p>{friendInfo.userName}</p>
      {/* {friendInfo.userImg} */}
      <p>{lastChat.content}</p>
      <p>{lastChat.time}</p>
    </div>
  );
};

export default ChatRoom;
