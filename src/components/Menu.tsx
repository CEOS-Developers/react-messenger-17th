import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = () => {
  return (
    <MenuBox>
      <Link to="/">친구</Link>
      <Link to="/chatrooms">채팅</Link>
      <Link to="/settings">더보기</Link>
    </MenuBox>
  );
};

export default Menu;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;
