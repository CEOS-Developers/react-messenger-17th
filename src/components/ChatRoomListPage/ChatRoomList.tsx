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
          const userId = chatRoomInfo.userId; //채팅방 정보 안의 userId
          const user = friendsInfo.find((friend) => friend.userId === userId);
          const userName = user?.userName;
          const userImg = user?.userImg;
          const lastChat = chatRoomInfo.chatList[chatRoomInfo.length - 1];

          return (
            <ChatRoom
              key={userId}
              userName={userName}
              userImg={userImg}
              lastMessage={lastChat.content}
              lastTime={lastChat.time}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ChatRoomList;
