import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Back from "../components/Bar/Back";
import MenuBar from "../components/Bar/MenuBar";
import {DiGithubBadge} from "react-icons/di";
import {GiHouse} from "react-icons/gi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 20px;
  background: linear-gradient(#D0F8B7, white, white, white);
  border-radius: 20px;
  margin: 0 auto;
  font-family: 'NanumL';
  user-select:none;
  }
`;
const Bar = styled.div`
display: flex;
background-color: #D0F8B7;
height: 10%;
border-radius: 20px 20px 0 0;
align-items: center;
`;

const Content =styled.div`
background: linear-gradient(#D0F8B7, white, white, white);
display: flex;
height: 78%;
justify-content: center;
align-items: center;
`;

function Setting(){
    return(
        <Wrapper>
          <Bar>
          <Back/>
          <h2 style={{fontSize: '20px', fontWeight: 1000,  margin:0, marginLeft:'10px'}}>Settings</h2>
          </Bar>
          <Content>
            <NavLink to='/' style={{color: "grey", fontSize:"30px"}}>
              <GiHouse/>
            </NavLink> 
            <NavLink to='https://github.com/sujinRo' target="_blank" style={{color:"grey", fontSize:"40px"}}>
              <DiGithubBadge/>
            </NavLink>
          </Content>
          <MenuBar/>
        </Wrapper>
    );
}

export default Setting;