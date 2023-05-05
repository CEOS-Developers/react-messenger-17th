import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState, myInfoSelector } from '../../state/atom';
import styled from 'styled-components';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { IUser } from '../../interface/interface';

type HeaderProps = {
  friendInfo: IUser;
};

const Header = ({ friendInfo }: HeaderProps) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const myInfo = useRecoilValue(myInfoSelector);
  const isMyAccount = currentUser.userId === myInfo.userId;

  const toggleUser = () => {
    isMyAccount ? setCurrentUser(friendInfo) : setCurrentUser(myInfo);
  };

  return (
    <HeaderBox>
      <ExitBtn
        onClick={() => {
          navigate('/chatrooms');
          setCurrentUser(myInfo);
        }}
      >
        <RiArrowLeftSLine />
      </ExitBtn>

      <UserInfo onClick={toggleUser}>
        <UserImg
          src={`${process.env.PUBLIC_URL}/Imgs/${
            isMyAccount ? friendInfo.userImg : myInfo.userImg
          }.jpg`}
          alt={currentUser.userName}
        />
        <UserName>
          {isMyAccount ? friendInfo.userName : myInfo.userName}
        </UserName>
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

  background-color: #9bbbd4;
  border-top-left-radius: 2.3rem;
  border-top-right-radius: 2.3rem;
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
