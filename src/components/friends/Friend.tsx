import React from 'react';
import styled from 'styled-components';
import { IFriendItem } from '../../store/interface';

function Friend({userid, status, username} : IFriendItem){
  return (
    <Wrapper>
      <UserImage src={`${process.env.PUBLIC_URL}/images/${userid}.jpg`} />
      <UserInfoWrapper>
        <UserName>{username}</UserName>
        <UserStatus>{status}</UserStatus>
      </UserInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  padding: 5px;
`;

const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  user-select : none;
`;

const UserInfoWrapper = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  margin-left : 10px;
`
const UserName = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const UserStatus = styled.div`
  color: gray;
  font-size: 14px;
  margin-top: 5px;
`;
export default Friend;