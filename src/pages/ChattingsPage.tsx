import { useState, useEffect } from "react";
import Splash from "../components/Splash";
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
import { PAGEKEY } from "../constants/LOCAL_KEY";

const ChattingsPage = () => {
  localStorage.setItem(PAGEKEY, "chattings");

  return (
    <PageWrapStyled>
      <Splash />
      <div>ChattingsPage</div>
    </PageWrapStyled>
  );
};

export default ChattingsPage;
