import { getDateString } from "../utils/getDateString";
import styled from "styled-components";

interface LeftChatProps {
  imgSrc: string;
  name: string;
  message: string;
  date: string;
}

const LeftChat = ({ imgSrc, name, message, date }: LeftChatProps) => {
  return (
    <Wrapper>
      <ImgContainer>
        <img src={imgSrc} alt="profile"></img>
      </ImgContainer>
      <MainContainer>
        <Name>{name}</Name>
        <ChatContainer>
          <Chat>{message}</Chat>
          <Time>
            <span>{getDateString(date)}</span>
          </Time>
        </ChatContainer>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 3.3rem;
  display: flex;
  margin-bottom: 0.6rem;
`;

const ImgContainer = styled.div`
  width: 2rem;
  height: 100%;
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

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
`;

const ChatContainer = styled.div`
  width: 100%;
  height: calc(3.3rem - 0.8rem - 0.5rem);
  display: flex;
`;

const Chat = styled.span`
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: white;
  border-radius: 0.2rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 10%);
  position: relative;

  &::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0.3rem;
    left: -0.7rem;
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid white;
    border-bottom: 0.4rem solid transparent;
  }
`;

let Time = styled.span`
  display: flex;
  align-items: flex-end;
  span {
    margin-left: 0.5rem;
    font-size: 0.5rem;
  }
`;

export default LeftChat;
