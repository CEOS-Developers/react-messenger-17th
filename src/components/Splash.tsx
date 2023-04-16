import { useState, useEffect } from "react";
import styled from "styled-components";
import { SPLASHKEY } from "../constants/LOCAL_KEY";
import imgUrl from "../assets/splash.jpg";

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

  return <>{isSplash && <Wrapper src={imgUrl}></Wrapper>}</>;
};

const Wrapper = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  animation: splashAnimation 3s forwards;

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
