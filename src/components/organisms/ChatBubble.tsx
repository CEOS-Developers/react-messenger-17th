import { memo } from "react";
import { userInterface, chatInterface } from "../../types/interfaces";
import { getDateString } from "../../utils/getDateString";
import styled from "styled-components";

interface ChatBubbleProps {
  isUser: boolean;
  nonTypingUser: userInterface;
  chatInfo: chatInterface;
  handleChatRightClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  setClickedBubbleInfo: (value: chatInterface) => void;
}

const areEqual = (prev: ChatBubbleProps, next: ChatBubbleProps) => {
  return (
    prev.isUser === next.isUser &&
    prev.nonTypingUser === next.nonTypingUser &&
    prev.chatInfo === next.chatInfo
  );
};

const ChatBubble = ({
  isUser,
  chatInfo,
  nonTypingUser,
  handleChatRightClick,
  setClickedBubbleInfo,
}: ChatBubbleProps) => {
  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleChatRightClick(e);
    setClickedBubbleInfo(chatInfo);
  };

  return (
    <Wrapper isUser={isUser}>
      {!isUser && (
        <ImgContainer>
          <img src={nonTypingUser.profileImage} alt="profile"></img>
        </ImgContainer>
      )}

      <MainContainer isUser={isUser}>
        {!isUser && <Name>{nonTypingUser.userName}</Name>}
        <ChatContainer isUser={isUser}>
          <Chat isUser={isUser} onContextMenu={handleRightClick}>
            {chatInfo.message}
          </Chat>

          <Time isUser={isUser}>
            <span>{getDateString(chatInfo.date)}</span>
          </Time>
        </ChatContainer>

        {chatInfo.liked ? <Liked isUser={isUser}>💕</Liked> : null}
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isUser: boolean }>`
  width: 100%;
  display: flex;
  ${(props) => (props.isUser ? "justify-content: flex-end" : "")};
  margin-bottom: 0.8rem;
`;

const ImgContainer = styled.div`
  width: 2rem;
  margin-right: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.8rem;
    object-fit: cover;
    cursor: pointer;
  }
`;

const MainContainer = styled.div<{ isUser: boolean }>`
  width: ${(props) =>
    props.isUser ? "calc(100% - 1rem)" : "calc(100% - 3rem)"};
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
`;

const ChatContainer = styled.div<{ isUser: boolean }>`
  display: flex;
  ${(props) => (props.isUser ? "justify-content: flex-end" : "")};
`;

const Chat = styled.span<{ isUser: boolean }>`
  max-width: calc(100% - 5rem);
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.isUser ? "var(--yellow-tag)" : "white"};
  border-radius: 0.2rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 10%);
  position: relative;
  word-break: break-all;
  white-space: pre-wrap;

  ${(props) =>
    props.isUser
      ? `&::after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0.3rem;
        right: -0.7rem;
        border-left: 0.4rem solid var(--yellow-tag);
        border-right: 0.4rem solid transparent;
        border-bottom: 0.4rem solid transparent;
      }`
      : `&::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0.3rem;
        left: -0.7rem;
        border-left: 0.4rem solid transparent;
        border-right: 0.4rem solid white;
        border-bottom: 0.4rem solid transparent;
      }`};
`;

const Time = styled.span<{ isUser: boolean }>`
  ${(props) => (props.isUser ? "order: -1" : "")};
  width: 5rem;
  display: flex;
  ${(props) => (props.isUser ? "justify-content: flex-end" : "")};
  align-items: flex-end;

  span {
    ${(props) =>
      props.isUser ? "margin-right: 0.5rem" : "margin-left: 0.5rem"};
    font-size: 0.5rem;
  }
`;

const Liked = styled.div<{ isUser: boolean }>`
  display: flex;
  ${(props) => (props.isUser ? "justify-content: flex-end" : "")};
  z-index: 999;
`;

// export default ChatBubble;
export default memo(ChatBubble, areEqual);
