import React, { useState } from 'react';
import ProfileList from './ProfileList';
import { useRecoilValue } from 'recoil';
import { friendsInfoSelector } from '../../state/atom';
import Profile from './Profile';
import styled from 'styled-components';

const FriendsPage = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [text, setText] = useState('');
  const friendsInfo = useRecoilValue(friendsInfoSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <FriendsPageBox>
      <Header>
        <h1>친구</h1>
        <button onClick={() => setIsSearching(!isSearching)}>🔍</button>
      </Header>

      {isSearching ? (
        <>
          <InputBox>
            <SearchInput
              placeholder="친구 검색"
              value={text}
              onChange={handleChange}
            />
          </InputBox>
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
    </FriendsPageBox>
  );
};

export default FriendsPage;

const FriendsPageBox = styled.div`
  //padding: 0 1.5rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: 'IBMPlexSansKR-Regular';
  padding: 0 1.5rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  border: 1px solid rgb(179, 177, 177);
  border-radius: 1rem;
  width: 16rem;
  height: 2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    text-align: center;
    font-family: 'IBMPlexSansKR-Regular';
  }
`;
