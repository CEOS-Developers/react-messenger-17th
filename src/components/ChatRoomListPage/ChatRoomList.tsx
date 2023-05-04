import React from 'react';
import { useRecoilValue } from 'recoil';
import { allChatRoomsInfoState, friendsInfoSelector } from '../../state/atom';
import ChatRoom from './ChatRoom';

const ChatRoomList = () => {
  const allChatRoomsInfo = useRecoilValue(allChatRoomsInfoState);
  const friendsInfo = useRecoilValue(friendsInfoSelector);

  return (
    <div>
      <ul>
        {allChatRoomsInfo.map((chatRoomInfo) => {
          const selectedFriendInfo = friendsInfo.find(
            (friend) => friend.userId === chatRoomInfo.userId
          )!; //채팅방 정보 안의 userId
          const chatList = chatRoomInfo.chatList;

          return (
            <ChatRoom
              key={selectedFriendInfo.userId}
              friendInfo={selectedFriendInfo}
              chatList={chatList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ChatRoomList;
