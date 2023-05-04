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
          const friendInfo = friendsInfo.find(
            (friend) => friend.userId === chatRoomInfo.userId
          )!;
          const chatList = chatRoomInfo.chatList;

          return (
            <ChatRoom
              key={friendInfo.userId}
              friendInfo={friendInfo}
              chatList={chatList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ChatRoomList;
