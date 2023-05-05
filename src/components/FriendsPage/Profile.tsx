import React from 'react';
import styled from 'styled-components';

type ProfileProps = {
  userId?: number;
  userName: string;
  userImg: string;
  statusMessage: string;
};

const Profile = ({ userName, userImg, statusMessage }: ProfileProps) => {
  return (
    <ProfileBox>
      <UserImg
        src={`${process.env.PUBLIC_URL}/Imgs/${userImg}.jpg`}
        alt={userName}
      />
      <div>
        <UserName>{userName}</UserName>
        <StatusMeaasge>{statusMessage}</StatusMeaasge>
      </div>
    </ProfileBox>
  );
};

export default Profile;

const ProfileBox = styled.div`
  display: flex;
  padding: 0.5rem 1.5rem;
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

const StatusMeaasge = styled.div`
  color: #6a6767;
  font-family: 'IBMPlexSansKR-Regular';
`;
