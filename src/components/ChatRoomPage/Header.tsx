import React from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../state/atom';
import userData from '../../db/userData.json';

const Header = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const toggleUser = () => {
    if (currentUser.userId === 0) {
      setCurrentUser(userData[1]); //나중에 수정 (현재 채팅 상대)
    } else {
      setCurrentUser(userData[0]);
    }
  };

  return (
    <header>
      <button>◀</button> {/* 채팅룸 나가기 버튼 */}
      <button onClick={toggleUser}>
        <img
          src={`${process.env.PUBLIC_URL}/Imgs/${currentUser.userImg}.jpg`}
          alt={currentUser.userName}
        />
        {/* userImg */}
        <span>{currentUser.userName}</span> {/* userName */}
      </button>
    </header>
  );
};

export default Header;
