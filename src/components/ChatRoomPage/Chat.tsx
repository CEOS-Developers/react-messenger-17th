import React from 'react';
import { IChat } from '../../interface/interface';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../state/atom';
import userData from '../../db/userData.json';

const Chat = (chat: IChat) => {
  const currentUser = useRecoilValue(currentUserState);

  return (
    <>
      {chat.userId === currentUser.userId ? (
        //오른쪽으로
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/Imgs/${currentUser.userImg}.jpg`}
            alt={currentUser.userName}
          />
          {/* userImg */}
          <div>
            <div>{currentUser.userName}</div> {/* userName */}
            <div>{chat.content}</div> {/* chatContent */}
          </div>
          <span>{chat.time}</span> {/* chatTime */}
        </div>
      ) : (
        //왼쪽으로
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/Imgs/${
              userData[chat.userId].userImg
            }.jpg`}
            alt={userData[chat.userId].userName}
          />
          {/* userImg */}
          <div>
            <div>{userData[chat.userId].userName}</div> {/* userName */}
            <div>{chat.content}</div> {/* chatContent */}
          </div>
          <span>{chat.time}</span> {/* chatTime */}
        </div>
      )}
    </>
  );
};

export default Chat;
