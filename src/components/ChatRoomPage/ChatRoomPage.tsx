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
    <Container>
      <ChatRoomBox>
        <Header friendInfo={friendInfo} />
        <ChatList friendInfo={friendInfo} chatList={chatList} />
        <ChatInput friendInfo={friendInfo} chatList={chatList} />
      </ChatRoomBox>
    </Container>
  );
};

export default ChatRoomPage;

const Container = styled.div`
  width: 26rem;
  height: 46rem;

  border-radius: 2.3rem;
  box-shadow: 0px 0px 5px #444;

  display: flex;
`;

const ChatRoomBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
