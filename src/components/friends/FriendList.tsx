import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import Profile from '../common/Profile';
import Friend from './Friend';
import Search from '../common/Search';
import user from '../../data/user.json';
import {IFriendItem} from '../../store/interface';
import {isSearch,showProfile} from '../../store/atom'
function FriendList(): JSX.Element {
  const friendsLists = user;
  const mine = friendsLists.slice(0,1);
  const friends = friendsLists.slice(1);
  const [filterFriends, setFilterFriends] = useState(friends);
  const [isSearchVisible, setIsSearchVisible] = useRecoilState(isSearch);
  const [profileNum, setProfileNum] = useRecoilState<number>(showProfile);
  
  const filterMember = (input: string): void => {
    const filteredFriend = friends.filter((friend) =>
      friend.username.toLowerCase().includes(input.trim().toLowerCase())
    );
    setFilterFriends(filteredFriend);
  };
  
  return (
    <FriendsWrapper className={`${isSearchVisible ?  'show' : ''}`}>
      {profileNum !== -1 && <Profile />}
      {isSearchVisible && <Search filtering={filterMember} onClose={() => setIsSearchVisible(false)} />}
      {mine.map(({ userid, username, status}: IFriendItem) => (
          <Friend key = {userid} userid = {userid} status = {status} username = {username} />
      ))}
      <hr></hr>
      {filterFriends.map(({ userid, username, status}: IFriendItem) => (
          <Friend key = {userid} userid = {userid} status = {status} username = {username} />
      ))}
    </FriendsWrapper>
  )
}

export default FriendList;
const FriendsWrapper = styled.div.attrs({
  tabIndex: 0,
})`
  height : 100%;
  padding : 1rem;
  overflow : auto;
  &.show{
    margin-top : 50px;
  }
`;