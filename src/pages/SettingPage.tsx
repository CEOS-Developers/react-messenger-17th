import { useState, useEffect } from "react";
// components
import Splash from "../components/Splash";
import Navigation from "../components/Navigation";
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

      <div>SettingPage</div>
    </PageWrapStyled>
  );
};

export default SettingPage;
