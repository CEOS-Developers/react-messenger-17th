import React, { useState } from 'react';
import ProfileList from './ProfileList';
import { useRecoilValue } from 'recoil';
import { friendsInfoSelector } from '../../state/atom';
import Profile from './Profile';

const FriendsPage = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [text, setText] = useState('');
  const friendsInfo = useRecoilValue(friendsInfoSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <header>
        <h1>친구</h1>
        <button onClick={() => setIsSearching(!isSearching)}>🔍</button>
      </header>

      {isSearching ? (
        <>
          <input placeholder="친구 검색" value={text} onChange={handleChange} />
          <>
            {friendsInfo.map((friend) => (
              <>
                {friend.userName.includes(text) ? (
                  <Profile
                    key={friend.userId}
                    userName={friend.userName}
                    userImg={friend.userImg}
                    statusMessage={friend.statusMessage}
                  />
                ) : (
                  <></>
                )}
              </>
            ))}
          </>
        </>
      ) : (
        <ProfileList />
      )}
    </>
  );
};

export default FriendsPage;
