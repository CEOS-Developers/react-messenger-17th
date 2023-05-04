import React from 'react';
import { IChat, IUser } from '../../interface/interface';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import {
  selectedChatListState,
  selectedFriendInfoState,
} from '../../state/atom';

type ChatRoomProps = {
  friendInfo: IUser;
  chatList: IChat[];
};

const ChatRoom = ({ friendInfo, chatList }: ChatRoomProps) => {
  const navigate = useNavigate();
  //const setSelectedFriendInfo = useSetRecoilState(selectedFriendInfoState);
  //const setSelectedChatList = useSetRecoilState(selectedChatListState);
  const lastChat = chatList[chatList.length! - 1];

  return (
    <div
      onClick={() => {
        navigate(`/chatrooms/${friendInfo.userId}`);
        //setSelectedFriendInfo(friendInfo);
        //setSelectedChatList(chatList);
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
