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

const FriendsPage = () => {
  localStorage.setItem(PAGEKEY, "friends");

  return (
    <PageWrapStyled>
      <Splash />

      <Navigation menu={"friends"} />

      <PageMainStyled>
        <div>FriendsPage</div>
      </PageMainStyled>
    </PageWrapStyled>
  );
};

export default FriendsPage;
