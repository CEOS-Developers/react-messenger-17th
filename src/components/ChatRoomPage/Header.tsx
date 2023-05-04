import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState, myInfoSelector } from '../../state/atom';
import styled from 'styled-components';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { IUser } from '../../interface/interface';

type HeaderProps = {
  friendInfo: IUser;
};

const Header = ({ friendInfo }: HeaderProps) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const myInfo = useRecoilValue(myInfoSelector);

  const toggleUser = () => {
    if (currentUser.userId === myInfo.userId) {
      setCurrentUser(friendInfo); //현재 채팅 상대
    } else {
      setCurrentUser(myInfo);
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
          src={`${process.env.PUBLIC_URL}/Imgs/${currentUser.userImg}.jpg`} //**otherUser.uerImg / 아래는 otherUser.userName로 수정하기!
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

  padding: 1rem;
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
  margin: 0 0.7rem;
`;

const UserName = styled.div`
  font-size: 2.2rem;
  font-weight: bold;

  font-family: 'IBMPlexSansKR-Regular';
`;
