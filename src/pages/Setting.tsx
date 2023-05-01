import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Back from "../components/Back";
import MenuBar from "../components/MenuBar";
import {DiGithubBadge} from "react-icons/di";
import {GiHouse} from "react-icons/gi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  background: linear-gradient(#D0F8B7, white, white, #D0F8B7);
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 20px;
  border-radius: 20px;
  margin: 0 auto;
  font-family: 'KBIZ';
`;

const Bar = styled.div`
display: flex;
margin: 23px;
`;

const Content =styled.div`
display: flex;
height: 80vh;
justify-content: center;
align-items: center;
`;

function Setting(){
    return(
        <Wrapper>
          <Bar>
          <Back/>
          <h3 style={{margin:0, marginLeft:'15px'}}>Settings</h3>
          </Bar>
          <Content>
            <NavLink to='/' style={{color: "coral", fontSize:"35px"}}>
              <GiHouse/>
            </NavLink> 
            <NavLink to='https://github.com/sujinRo' target="_blank" style={{color:"black", fontSize:"45px"}}>
              <DiGithubBadge/>
            </NavLink>
          </Content>
          <MenuBar/>
        </Wrapper>
    );
}

export default Setting;