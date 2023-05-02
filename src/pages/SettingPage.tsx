import { VscGithubInverted } from "react-icons/vsc";
import { SiTistory } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";
import styled from "styled-components";

const SettingPage = () => {

    return (
      
      <div>
        <Title>
          <span> 설정</span>
        </Title>

        <Body>
          <Click href="https://github.com/YelynnOh" target='_blank' rel='noreferrer' >
            <VscGithubInverted size="50" color="navy"/>
          </Click>
          <Click href="https://shingy.tistory.com/" target='_blank' rel='noreferrer'>
            <SiTistory size="50" color="navy"/>
          </Click>
          <Click href="https://www.youtube.com/watch?v=1KGZtWbZtq8" target='_blank' rel='noreferrer'>
            <TbBrandDisney size="50" color="navy"/>
          </Click>
        </Body>
      </div>
    );
  };
  
  export default SettingPage;

  const Title = styled.h1`
    font-size: 1.5rem;
    padding: 1rem;
    margin-bottom: 4rem;
  `;
  const Body = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
  `;

  const Click = styled.a`
      width: 50px;
  `;