import styled from "styled-components";
import { Chat, User } from "../../common/interface";
import { ProfileImage } from "../../common/StyledComponent";

interface ChatItemProps {
  chat: Chat;
  isCurUser: boolean;
  sender: User;
}

const ChatItem = ({ chat, isCurUser, sender }: ChatItemProps) => {
  const time = String(new Date(chat.date).getHours()).padStart(2, "0");
  const minute = String(new Date(chat.date).getMinutes()).padStart(2, "0");

  return (
    <Wrapper isCurUser={isCurUser}>
      {isCurUser ? (
        <>
          <ChatWrapper>
            {time}:{minute}
            <ChatBalloon isCurUser={true}>{chat.text}</ChatBalloon>
          </ChatWrapper>
        </>
      ) : (
        <>
          <ProfileImage src={sender.profileImage} />
          <ContentWrapper>
            {sender.name}
            <ChatWrapper>
              <ChatBalloon isCurUser={false}>{chat.text}</ChatBalloon>
              {time}:{minute}
            </ChatWrapper>
          </ContentWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: ${({ isCurUser }: { isCurUser: boolean }) =>
    isCurUser ? "flex-end" : "flex-start"};
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: 'GmarketSansMedium';
`;
const ChatWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  font-family: 'GmarketSansMedium';
`;
const ChatBalloon = styled.div`
  background-color: ${({ isCurUser }: { isCurUser: boolean }) =>
    isCurUser ? "yellow" : "white"};
  padding: 10px;
  border-radius: 5px;
  word-break: break-all;
`;

export default ChatItem;