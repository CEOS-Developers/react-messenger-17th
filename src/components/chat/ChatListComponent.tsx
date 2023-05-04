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
      <div>
      {roomLists.map((room) => (
        <>
          <ChatRoom key = {room.roomid} 
          roomid = {room.roomid} 
          userid = {room.userid} 
          username = {room.username} 
          messages = {room.messages[room.messages.length - 1].message}/>
        </>
      ))}
    </div>
    </ChatListWrapper>
  )
}

export default ChatList;

const ChatListWrapper = styled.div`
	height : 480px;
  padding : 1rem;
`