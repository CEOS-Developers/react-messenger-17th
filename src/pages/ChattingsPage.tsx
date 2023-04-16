import { useState, useEffect } from "react";
// components
import Splash from "../components/Splash";
import Navigation from "../components/Navigation";
// styles
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
import { PageMainStyled } from "../components/styled/PageMainStyled";
// constants
import { PAGEKEY } from "../constants/LOCAL_KEY";

const ChattingsPage = () => {
  localStorage.setItem(PAGEKEY, "chattings");

  return (
    <PageWrapStyled>
      <Splash />

      <Navigation menu="chattings" />

      <PageMainStyled>
        <div>ChattingsPage</div>
      </PageMainStyled>
    </PageWrapStyled>
  );
};

export default ChattingsPage;
