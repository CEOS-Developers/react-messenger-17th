import { useState, useEffect } from "react";
// components
import Splash from "../components/Splash";
import Navigation from "../components/Navigation";
import SingleCard from "../components/SingleCard";
import { DownwardArrow } from "../components/icons/DownwardArrow";
import { UpwardArrow } from "../components/icons/UpwardArrow";
// styles
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
import { PageMainStyled } from "../components/styled/PageMainStyled";
// constants
import { PAGEKEY } from "../constants/LOCAL_KEY";
import chatsData from "../json/chatsData.json";

const ChattingsPage = () => {
  localStorage.setItem(PAGEKEY, "chattings");
  const [isSorting, setIsSorting] = useState<boolean>(false);

  return (
    <PageWrapStyled>
      <Splash />

      <Navigation menu="chattings" />

      <Main>
        <Header>
          <span>채팅</span>
          <div onClick={() => setIsSorting(!isSorting)}>
            {isSorting ? (
              <UpwardArrow width={10} height={10} />
            ) : (
              <DownwardArrow width={10} height={10} />
            )}
          </div>
        </Header>

        <Body>
          {chatsData.chattings.map((chatting) => {
            return (
              <SingleCard
                type="chatting"
                key={chatting.chattingId}
                chatInfo={chatting}
              />
            );
          })}
        </Body>
      </Main>
    </PageWrapStyled>
  );
};

const Main = styled(PageMainStyled)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Header = styled.header`
  width: calc(100% - 2rem);
  height: 2rem;
  margin: 1rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1.2rem;
    font-weight: 700;
    user-select: none;
  }

  div {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

const Body = styled.main`
  width: 100%;
  overflow-y: scroll;
`;

export default ChattingsPage;
