import React from 'react';
import styled from 'styled-components';
import { IChat } from '../../interface/interface';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../state/atom';
import userData from '../../db/userData.json';

const Chat = (chat: IChat) => {
  const currentUser = useRecoilValue(currentUserState);
  //chat.userId === currentUser.userId;

  return (
    <ChatContainer isActive={chat.userId === currentUser.userId}>
      <UserImg
        src={`${process.env.PUBLIC_URL}/Imgs/${
          userData[chat.userId].userImg
        }.jpg`}
        alt={userData[chat.userId].userName}
        isActive={chat.userId === currentUser.userId}
      />
      <div>
        <UserName isActive={chat.userId === currentUser.userId}>
          {userData[chat.userId].userName}
        </UserName>
        <ChatBox isActive={chat.userId === currentUser.userId}>
          <ChatContent isActive={chat.userId === currentUser.userId}>
            {chat.content}
          </ChatContent>
          <ChatTime>{chat.time}</ChatTime>
        </ChatBox>
      </div>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-start;
  padding: 0.6rem 0.7rem;

  flex-direction: ${(props) => (props.isActive ? 'row-reverse' : 'row')};
`;

const UserImg = styled.img<{ isActive: boolean }>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const UserName = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-start;
  font-weight: 500;

  flex-direction: ${(props) => (props.isActive ? 'row-reverse' : 'row')};
  margin: ${(props) => (props.isActive ? ' 0 0.5rem 0 0' : '0 0 0 0.5rem')};
`;

const ChatBox = styled.div<{ isActive: boolean }>`
  display: flex;

  flex-direction: ${(props) => (props.isActive ? 'row-reverse' : 'row')};
`;

const ChatContent = styled.div<{ isActive: boolean }>`
  background: rgb(246, 255, 218);
  background: radial-gradient(
    circle,
    rgba(246, 255, 218, 1) 13%,
    rgba(242, 255, 177, 1) 100%
  );
  padding: 0.5rem;
  border: 1px solid #8b8989df;
  margin: 0.3rem 0.4rem;
  font-size: 0.88rem;

  border-radius: ${(props) =>
    props.isActive ? ' 1rem 0 1rem 1rem' : '0 1rem 1rem 1rem'};
`;

const ChatTime = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.4rem;

  font-size: 0.8rem;
`;
