import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {roomList,selectedRoom} from '../../store/atom';
import {IChatRoom,IUser} from '../../store/interface';
import Search from '../common/Search';
import ChatRoom from './ChatRoom';
import {useRecoilState} from 'recoil';
import message from '../../data/message.json';
import {isSearch} from '../../store/atom'
import { useState } from 'react';
function ChatList(): JSX.Element {
  const roomLists = useRecoilValue<IChatRoom[]>(roomList);
  const [selectedRoomId, setSelectedRoomId] = useRecoilState<number>(selectedRoom);
  const sortedRoomLists = roomLists.slice().sort((a, b) => b.messages[b.messages.length - 1].id - a.messages[a.messages.length - 1].id);
  const [isSearchVisible, setIsSearchVisible] = useRecoilState(isSearch);

  const messages = message;
  const [filterChat, setFilterChat] = useState(sortedRoomLists);
  const filterChats = (input: string): void => {
    const filteredChat = sortedRoomLists.filter((room) =>
      room.username.includes(input) ||
      room.messages.some(message => message.message.includes(input))
    );
    setFilterChat(filteredChat);
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
    <ChatListWrapper className={`${isSearchVisible ?  'show' : ''}`} onKeyDown = {handleKeyDown}>
     {isSearchVisible && <Search filtering={filterChats} onClose={() => setIsSearchVisible(false)} />}
      {filterChat.map(({roomid,userid,username,messages}: IChatRoom) => (
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

const ChatListWrapper = styled.div.attrs({
  tabIndex: 0,
})`
  height : 100%;
  padding : 1rem;
  overflow : auto;
  &.show{
    margin-top : 50px;
  }
`;