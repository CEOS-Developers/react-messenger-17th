import { useState, useEffect } from "react";
import Splash from "../components/Splash";
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
import { PAGEKEY } from "../constants/LOCAL_KEY";

const FriendsPage = () => {
  localStorage.setItem(PAGEKEY, "friends");

  return (
    <PageWrapStyled>
      <Splash />
      <div>FriendsPage</div>
    </PageWrapStyled>
  );
};

export default FriendsPage;
