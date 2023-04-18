import { useState } from "react";
// styles
import styled from "styled-components";
// interface
import { userInterface, chattingInterface } from "../interfaces/interface";

import usersData from "../json/usersData.json";
import { getDateString } from "../utils/getDateString";

interface SingleCardProps {
  type: "profile" | "chatting";
  userInfo?: userInterface;
  chatInfo?: chattingInterface;
}

const SingleCard = ({ type, userInfo, chatInfo }: SingleCardProps) => {
  const friendId = chatInfo?.userIdList.filter((id) => id !== 0)[0];
  const friendInfoById = usersData.users.filter(
    (user) => user.userId === friendId
  )[0];
  const lastChat = chatInfo?.chatList[chatInfo?.chatList.length - 1];

  return (
    <Wrapper type={type}>
      <img
        src={userInfo?.profileImage ?? friendInfoById.profileImage}
        alt="사진"
      ></img>

      <Content type={type}>
        <Title>{userInfo?.userName ?? friendInfoById.userName}</Title>
        <Text type={type}>{userInfo?.statusMessage ?? lastChat?.message}</Text>
      </Content>

      {type === "chatting" && (
        <Date>{getDateString(lastChat?.date ?? "")}</Date>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ type: string }>`
  width: 100%;
  min-height: 4rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--light-gray-tag);
  }

  img {
    width: ${(props) => (props.type === "profile" ? "2.5rem" : "3rem")};
    height: ${(props) => (props.type === "profile" ? "2.5rem" : "3rem")};
    margin-left: 1rem;
    border: 1px solid transparent;
    border-radius: 1rem;

    cursor: pointer;
  }
`;
const Content = styled.div<{ type: string }>`
  width: ${(props) =>
    props.type === "profile" ? "calc(100% - 2.5rem - 0.5rem)" : "7rem"};
  height: 2.5rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    width: ${(props) => (props.type === "profile" ? "10rem" : "7rem")};
    font-size: 0.8rem;
    user-select: none;

    white-space: ${(props) =>
      props.type === "profile" ? "nowrap" : "pre-wrap"};
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Title = styled.span`
  font-weight: 700;
`;
const Text = styled.span<{ type: string }>`
  padding-top: 0.2rem;
  color: var(--gray-font);

  ${(props) =>
    props.type === "chatting" &&
    "display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical"};
`;

const Date = styled.span`
  margin: 1rem 0.5rem auto auto;
  font-size: 0.6rem;
  color: var(--gray-font);
  white-space: nowrap;
`;

export default SingleCard;
