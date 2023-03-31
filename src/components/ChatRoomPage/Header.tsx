import React from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../state/atom';
import userData from '../../db/userData.json';
import styled from 'styled-components';
import { RiArrowLeftSLine } from 'react-icons/ri';

const Header = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const toggleUser = () => {
    if (currentUser.userId === 0) {
      setCurrentUser(userData[1]); //나중에 수정 (현재 채팅 상대)
    } else {
      setCurrentUser(userData[0]);
    }
  };

  return (
    <HeaderBox>
      <ExitBtn>
        <RiArrowLeftSLine />
      </ExitBtn>
      {/* 채팅룸 나가기 버튼 */}
      <UserInfo onClick={toggleUser}>
        <UserImg
          src={`${process.env.PUBLIC_URL}/Imgs/${currentUser.userImg}.jpg`}
          alt={currentUser.userName}
        />
        <UserName>{currentUser.userName}</UserName>
      </UserInfo>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  display: flex;
  align-items: center;

  padding: 0.8rem;
  padding-left: 0;
`;

const ExitBtn = styled.button`
  font-size: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const UserImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin: 0 0.5rem;
`;

const UserName = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
`;
