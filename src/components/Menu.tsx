import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { BsFillPersonFill } from 'react-icons/bs';
import { TfiMoreAlt } from 'react-icons/tfi';

const Menu = () => {
  return (
    <MenuBox>
      <IconBox>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <BsFillPersonFill size={40} />
        </Link>
      </IconBox>
      <IconBox>
        <Link
          to="/chatrooms"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <TbMessageCircle2Filled size={30} />
        </Link>
      </IconBox>
      <IconBox>
        <Link
          to="/settings"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <TfiMoreAlt size={30} />
        </Link>
      </IconBox>
    </MenuBox>
  );
};

export default Menu;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

const IconBox = styled.div`
  margin: 1rem;
`;
