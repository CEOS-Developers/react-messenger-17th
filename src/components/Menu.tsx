import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <Link to="/">친구</Link>
      <Link to="/chatrooms">채팅</Link>
      <Link to="/settings">더보기</Link>
    </div>
  );
};

export default Menu;
