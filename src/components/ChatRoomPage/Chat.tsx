import React from 'react';
import { IChat } from '../../interface/interface';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../state/atom';
import userData from '../../db/userData.json';

const Chat = (chat: IChat) => {
  const currentUser = useRecoilValue(currentUserState);
  const otherUserId = chat.userId;

  return (
    <>
      {chat.userId === currentUser.userId ? (
        //오른쪽으로
        <div>
          {/*<img />*/} {/* userImg */}
          <div>
            <div>{currentUser.userName}</div> {/* userName */}
            <div>{chat.content}</div> {/* chatContent */}
          </div>
          <span></span> {/* chatTime */}
        </div>
      ) : (
        //왼쪽으로
        <div>
          {/*<img />*/} {/* userImg */}
          <div>
            <div>{userData[otherUserId].userName}</div> {/* userName */}
            <div>{chat.content}</div> {/* chatContent */}
          </div>
          <span></span> {/* chatTime */}
        </div>
      )}
    </>
  );
};

export default Chat;
