import styled from 'styled-components';
import {IFriendItem} from '../../store/interface';
import {friendList} from '../../store/atom';
import Friend from './Friend'
import {useRecoilState} from 'recoil';
function FriendList(): JSX.Element {
  const [friendLists, setFriendLists] = useRecoilState<IFriendItem[]>(friendList);
  const mine = friendLists.slice(0,1);
  const friends = friendLists.slice(1);
  return (
    <FriendsWrapper>
      {mine.map(({ userid, username, status}: IFriendItem) => (
          <Friend key = {userid} userid = {userid} status = {status} username = {username} />
      ))}
      <hr></hr>
      {friends.map(({ userid, username, status}: IFriendItem) => (
          <Friend key = {userid} userid = {userid} status = {status} username = {username} />
      ))}
    </FriendsWrapper>
  )
}

export default FriendList;

const FriendsWrapper = styled.div`
	height : 460px;
  padding : 1rem;
  margin-top : 50px;
  overflow : scroll;
`