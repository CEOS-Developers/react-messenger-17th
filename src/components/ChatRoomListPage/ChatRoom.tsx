import React from 'react';
import { IChat, IUser } from '../../interface/interface';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type ChatRoomProps = {
  friendInfo: IUser;
  chatList: IChat[];
};

const ChatRoom = ({ friendInfo, chatList }: ChatRoomProps) => {
  const navigate = useNavigate();
  const lastChat = chatList[chatList.length! - 1];

  return (
    <ChatRoomBtn
      onClick={() => {
        navigate(`/chatrooms/${friendInfo.userId}`);
      }}
    >
      <LeftBox>
        <UserImg
          src={`${process.env.PUBLIC_URL}/Imgs/${friendInfo.userImg}.jpg`}
          alt={friendInfo.userName}
        />
        <div>
          <UserName>{friendInfo.userName}</UserName>
          <LastContent>{lastChat.content}</LastContent>
        </div>
      </LeftBox>
      <RightBox>
        <LastTime>{lastChat.time}</LastTime>
      </RightBox>
    </ChatRoomBtn>
  );
};

export default ChatRoom;

const ChatRoomBtn = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  background-color: transparent;
  transition: all 100ms ease-out;

  &:hover {
    background-color: #a6a4a321;
  }
`;

const UserImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 0.15rem solid #b8b6b6;
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserName = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  font-family: 'IBMPlexSansKR-Regular';
`;

const LastContent = styled.div`
  font-family: 'IBMPlexSansKR-Regular';
`;

const LeftBox = styled.div`
  display: flex;
`;

const RightBox = styled.div`
  margin-left: 0.5rem;
`;

const LastTime = styled.div`
  font-size: 0.75rem;
  font-family: 'IBMPlexSansKR-Regular';
`;
