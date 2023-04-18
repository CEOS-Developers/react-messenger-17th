import { useState } from "react";
// styles
import styled from "styled-components";
// interface
import { userInterface } from "../interfaces/interface";

// Q. props 자리에 userInfo : userInterface 바로 입력 시 에러. ProfileCardProps로 한 번 거치면 작동하는데 그 이유?
interface ProfileCardProps {
  userInfo: userInterface;
}

const ProfileCard = ({ userInfo }: ProfileCardProps) => {
  return (
    <Wrapper>
      <img src={userInfo.profileImage} alt="사진"></img>
      <ProfileText>
        <Name>{userInfo.userName}</Name>
        <Status>{userInfo.statusMessage}</Status>
      </ProfileText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 4rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--light-gray-tag);
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;
    border: 1px solid transparent;
    border-radius: 1rem;

    cursor: pointer;
  }
`;
const ProfileText = styled.div`
  width: calc(100% - 2.5rem - 0.5rem);
  height: 2.5rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    user-select: none;
  }
`;
const Name = styled.span`
  font-weight: 700;
`;
const Status = styled.span`
  color: var(--gray-font);
`;

export default ProfileCard;
