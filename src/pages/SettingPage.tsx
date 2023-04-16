import { useState, useEffect } from "react";
import Splash from "../components/Splash";
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
import { PAGEKEY } from "../constants/LOCAL_KEY";

const SettingPage = () => {
  localStorage.setItem(PAGEKEY, "setting");

  return (
    <PageWrapStyled>
      <Splash />
      <div>SettingPage</div>
    </PageWrapStyled>
  );
};

export default SettingPage;
