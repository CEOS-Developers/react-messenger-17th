import React from 'react';
import { useRecoilValue } from 'recoil';
import { myInfoSelector, friendsInfoSelector } from '../../state/atom';
import Profile from './Profile';
import styled from 'styled-components';

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

      <FriendProfileList>
        <FriendTitle>친구 {friendsInfo.length}</FriendTitle>
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
      </FriendProfileList>
    </div>
  );
};

export default ProfileList;

const FriendTitle = styled.div`
  padding: 0 1.5rem;
  font-weight: bold;
  font-family: 'IBMPlexSansKR-Regular';
  margin-top: 1rem;
`;

const FriendProfileList = styled.div``;
