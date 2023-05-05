import { Chat, User } from '../../interfaces/Interface';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: ${({ isUser }: { isUser: boolean }) =>
    isUser ? 'flex-end' : 'flex-start'};
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ChatWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;
const ChatValue = styled.div`
  background-color: ${({ isUser }: { isUser: boolean }) =>
    isUser ? '#ECECEC' : 'white'};
  padding: 10px;
  border-radius: 10px;
  word-break: break-all;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`;

interface ChatItemProps {
  chat: Chat;
  isUser: boolean;
  sender: User;
}

function ChatItem({ chat, isUser, sender }: ChatItemProps) {
  const hour = String(new Date(chat.date).getHours()).padStart(2, '0');
  const minute = String(new Date(chat.date).getMinutes()).padStart(2, '0');
  const month = String(new Date(chat.date).getMonth()).padStart(2, '0');
  const day = String(new Date(chat.date).getDay()).padStart(2, '0');
  
  return (
    <Wrapper isUser={isUser}>
      {isUser ? (
        <>
          <ChatWrapper>
            {hour}:{minute}
            <ChatValue isUser={true}>{chat.text}</ChatValue>
          </ChatWrapper>
        </>
      ) : (
        <>
          <Image src={sender.image}></Image>
          <ContentWrapper>
            {sender.name}
            <ChatWrapper>
              <ChatValue isUser={false}>{chat.text}</ChatValue>
              {hour}:{minute}
            </ChatWrapper>
          </ContentWrapper>
        </>
      )}
    </Wrapper>
  );
}

export default ChatItem;
