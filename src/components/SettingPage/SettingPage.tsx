import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

const SettingPage = () => {
  return (
    <div>
      <Header>
        <h1>더보기</h1>
      </Header>

      <IconBox>
        <IconBtn onClick={() => window.open('https://github.com/paya17')}>
          <AiFillGithub size={100} />
        </IconBtn>
        <IconBtn onClick={() => window.open('https://youtu.be/8m6Cz1GJG3s')}>
          <AiFillYoutube size={100} />
        </IconBtn>
      </IconBox>
    </div>
  );
};

export default SettingPage;

const Header = styled.header`
  font-family: 'IBMPlexSansKR-Regular';
  padding: 0 1.5rem;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconBtn = styled.button`
  margin: 1.5rem 0;
`;
