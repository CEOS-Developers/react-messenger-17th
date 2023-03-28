import styled from "styled-components";

interface RightChatProps {
  message: string;
  time: Date;
}

const RightChat = ({ message, time }: RightChatProps) => {
  return (
    <Wrapper>
      <Time>
        <span>{`${time.getHours()}:${time.getMinutes()}`}</span>
      </Time>
      <Chat>{message}</Chat>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(3.3rem - 0.8rem - 0.5rem);
  display: flex;
  justify-content: flex-end;
`;

let Time = styled.span`
  display: flex;
  align-items: flex-end;
  span {
    margin-right: 0.5rem;
    font-size: 0.5rem;
  }
`;

const Chat = styled.span`
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: var(--yellow-tag);
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0.3rem;
    right: -0.7rem;
    border-left: 0.4rem solid var(--yellow-tag);
    border-right: 0.4rem solid transparent;
    border-bottom: 0.4rem solid transparent;
  }
`;

export default RightChat;
