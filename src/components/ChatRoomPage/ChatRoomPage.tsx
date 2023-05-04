import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { allChatRoomsInfoState, friendsInfoSelector } from '../../state/atom';

const ChatRoomPage = () => {
  const { userId } = useParams();
  const allChatRoomsInfo = useRecoilValue(allChatRoomsInfoState);
  const friendsInfo = useRecoilValue(friendsInfoSelector);
  const friendInfo = friendsInfo.find(
    (friend) => friend.userId === Number(userId)
  )!;
  const chatList = allChatRoomsInfo.find(
    (chatRoom) => chatRoom.userId === Number(userId)
  )?.chatList!;

  return (
    <ChatRoomBox>
      <Header friendInfo={friendInfo} />
      <ChatList friendInfo={friendInfo} chatList={chatList} />
      <ChatInput friendInfo={friendInfo} chatList={chatList} />
    </ChatRoomBox>
  );
};

export default ChatRoomPage;

const ChatRoomBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
