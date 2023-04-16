import { useState, useEffect } from "react";
// components
import Splash from "../components/Splash";
import Navigation from "../components/Navigation";
import { Github } from "../components/icons/Github";
import { Playlist } from "../components/icons/Playlist";
import { Email } from "../components/icons/Email";
// styles
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
// constants
import { PAGEKEY } from "../constants/LOCAL_KEY";

const SettingPage = () => {
  localStorage.setItem(PAGEKEY, "setting");

  return (
    <PageWrapStyled>
      <Splash />

      <Navigation menu={"setting"} />

      <PageMainStyled>
        <Menu href="https://github.com/Gaeun-Kwon">
          <Github width={40} height={40} />
          <span>깃허브</span>
        </Menu>
        <Menu href="mailto:fake.mail@gmail.com">
          <Email width={40} height={40} />
          <span>메일</span>
        </Menu>
        <Menu href="https://music.apple.com/profile/ganiradio">
          <Playlist width={40} height={40} />
          <span>플레이리스트</span>
        </Menu>
      </PageMainStyled>
    </PageWrapStyled>
  );
};

const PageMainStyled = styled.div`
  width: calc(100% - 4rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const Menu = styled.a.attrs({ target: "_blank" })`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 0 auto;
  cursor: pointer;
  text-decoration: none;

  span {
    margin-top: 1rem;
    color: gray;
  }

  &:hover {
    span {
      color: black;
    }
  }
`;

export default SettingPage;
