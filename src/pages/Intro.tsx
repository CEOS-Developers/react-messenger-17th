import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentChattingId } from "../recoil/recoil";
import styled from "styled-components";

const Intro = () => {
  // const navigate = useNavigate();
  // const navChattingId = useRecoilValue(currentChattingId);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate(`chattings/chatting/${navChattingId}`);
  //   }, 3000);
  // });

  return (
    <div>Intro</div>
    // <Wrapper>
    //   <div>Friends Talk</div>
    // </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  color: var(--dark-gray-tag);
  background-color: var(--yellow-tag);
  box-shadow: 0 0 20px rgba(0, 0, 0, 20%);
  animation: splashAnimation 3s forwards;

  div {
    padding-bottom: 5rem;
    color: var(--brown-tag);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.05rem;
  }

  @keyframes splashAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Intro;
