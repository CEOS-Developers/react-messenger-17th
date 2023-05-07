import React from 'react';
import styled from 'styled-components';
import { IChat } from '../../interface/interface';
import { useRecoilValue } from 'recoil';
import { currentUserState, allUsersInfoState } from '../../state/atom';

type ChatProps = {
  chat: IChat;
};

const Chat = ({ chat }: ChatProps) => {
  const currentUser = useRecoilValue(currentUserState);
  const allUsersInfo = useRecoilValue(allUsersInfoState);
  const isActive = chat.userId === currentUser.userId;
  const userInfo = allUsersInfo.find((user) => user.userId === chat.userId)!;

  return (
    <ChatContainer isActive={isActive}>
      <UserImg
        src={`${process.env.PUBLIC_URL}/Imgs/${userInfo.userImg}.jpg`}
        alt={userInfo.userName}
        isActive={isActive}
      />
      <div>
        <UserName isActive={isActive}>{userInfo.userName}</UserName>
        <ChatBox isActive={isActive}>
          <ChatContent isActive={isActive}>{chat.content}</ChatContent>
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
  font-weight: bold;
  font-family: 'IBMPlexSansKR-Regular';

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
  font-family: 'IBMPlexSansKR-Regular';
  word-break: break-all;

  border-radius: ${(props) =>
    props.isActive ? ' 1rem 0 1rem 1rem' : '0 1rem 1rem 1rem'};
`;

const ChatTime = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.4rem;

  font-size: 0.8rem;
  font-family: 'IBMPlexSansKR-Regular';
`;
