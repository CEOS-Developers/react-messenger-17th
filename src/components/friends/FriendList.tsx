import styled from 'styled-components';
import {IFriendItem} from '../../store/interface';
import Friend from './Friend'
import Search from '../common/Search';
import user from '../../data/user.json';
import { useState } from 'react';
import {isSearch} from '../../store/atom'
import { useRecoilState } from 'recoil';
function FriendList(): JSX.Element {
  // const [friendListss, setFriendLists] = useRecoilState<IFriendItem[]>(friendList);
  const friendsLists = user;
  const mine = friendsLists.slice(0,1);
  const friends = friendsLists.slice(1);
  const [filterFriends, setFilterFriends] = useState(friends);
  const [isSearchVisible, setIsSearchVisible] = useRecoilState(isSearch);
  const filterMember = (input: string): void => {
    const filteredFriend = friends.filter((friend) =>
      friend.username.toLowerCase().includes(input.trim().toLowerCase())
    );
    setFilterFriends(filteredFriend);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
      event.preventDefault();
      setIsSearchVisible(true);
    }
    else if ((event.key === 'Escape')){
      setIsSearchVisible(false);
    }
  };
  return (
    <FriendsWrapper className={`${isSearchVisible ?  'show' : ''}`} onKeyDown = {handleKeyDown}>
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
	height : 460px;
  padding : 1rem;
  overflow : scroll;
  &.show{
    margin-top : 50px;
  }
`;