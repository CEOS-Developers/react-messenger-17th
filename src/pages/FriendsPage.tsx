import { useState, useEffect } from "react";
// components
import Splash from "../components/Splash";
import Navigation from "../components/Navigation";
// styles
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
// constants
import { PAGEKEY } from "../constants/LOCAL_KEY";

const FriendsPage = () => {
  localStorage.setItem(PAGEKEY, "friends");

  return (
    <PageWrapStyled>
      <Splash />

      <Navigation menu={"friends"} />

      <div>FriendsPage</div>
    </PageWrapStyled>
  );
};

export default FriendsPage;
