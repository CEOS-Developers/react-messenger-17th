import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {roomList} from '../../store/atom';
import {IChatRoom} from '../../store/interface';
import ChatRoom from './ChatRoom';
function ChatList(): JSX.Element {
  const roomLists = useRecoilValue<IChatRoom[]>(roomList);
  console.log(roomLists);
  return (
    <ChatListWrapper>
      {roomLists.map(({roomid,userid,username,messages}: IChatRoom) => (
          <ChatRoom 
          key = {roomid} 
          roomid = {roomid} 
          userid = {userid} 
          username = {username} 
          messages = {messages[messages.length - 1].message}
          time = {messages[messages.length - 1].id}/>
      ))}
    </ChatListWrapper>
  )
}

export default ChatList;

const ChatListWrapper = styled.div`
	height : 480px;
  padding : 1rem;
`