import { useState, useEffect } from "react";
import styled from "styled-components";
import { SPLASHKEY } from "../constants/LOCAL_KEY";

const Splash = () => {
  const [isSplash, setIsSplash] = useState<boolean>(
    localStorage.getItem(SPLASHKEY) === "false" ? false : true
  );

  useEffect(() => {
    if (isSplash) {
      setTimeout(() => {
        setIsSplash(false);
        localStorage.setItem(SPLASHKEY, "false");
      }, 3000);
    }
  });

  return (
    <>
      {isSplash && (
        <Wrapper>
          <div>Friends Talk</div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: var(--yellow-tag);
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

export default Splash;
