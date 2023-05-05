import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {roomList,selectedRoom} from '../../store/atom';
import {IChatRoom,IUser} from '../../store/interface';
import ChatRoom from './ChatRoom';
import {useRecoilState} from 'recoil';
import {userInfo, partnerInfo} from '../../store/atom';
function ChatList(): JSX.Element {
  const roomLists = useRecoilValue<IChatRoom[]>(roomList);
  const [selectedRoomId, setSelectedRoomId] = useRecoilState<number>(selectedRoom);
  const sortedRoomLists = roomLists.slice().sort((a, b) => b.messages[b.messages.length - 1].id - a.messages[a.messages.length - 1].id);

  return (
    <ChatListWrapper>
      {sortedRoomLists.map(({roomid,userid,username,messages}: IChatRoom) => (
          <ChatRoom 
          key = {roomid} 
          roomid = {roomid} 
          userid = {userid} 
          username = {username} 
          messages = {messages[messages.length - 1].message}
          time = {messages[messages.length - 1].id}
          active={roomid === selectedRoomId}
          onClick={() => setSelectedRoomId(roomid === selectedRoomId ? -1 : roomid)}
        />
      ))}
    </ChatListWrapper>
  )
}

export default ChatList;

const ChatListWrapper = styled.div`
	height : 480px;
  padding : 1rem;
`