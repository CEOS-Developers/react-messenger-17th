import React from 'react';
import { useRecoilValue } from 'recoil';
import { myInfoSelector, friendsInfoSelector } from '../../state/atom';
import Profile from './Profile';

const ProfileList = () => {
  const myInfo = useRecoilValue(myInfoSelector);
  const friendsInfo = useRecoilValue(friendsInfoSelector);

  return (
    <div>
      <Profile
        key={myInfo.userId}
        userName={myInfo.userName}
        userImg={myInfo.userImg}
        statusMessage={myInfo.statusMessage}
      />

      <p>친구</p>
      <ul>
        {friendsInfo.map((friend) => (
          <Profile
            key={friend.userId}
            userName={friend.userName}
            userImg={friend.userImg}
            statusMessage={friend.statusMessage}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
