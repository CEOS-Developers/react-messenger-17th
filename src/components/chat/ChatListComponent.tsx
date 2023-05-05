import styled from 'styled-components';
import {useRecoilValue,useRecoilState} from 'recoil';
import {roomList,selectedRoom,isSearch,orderChat} from '../../store/atom';
import {IChatRoom} from '../../store/interface';
import Search from '../common/Search';
import ChatRoom from './ChatRoom';
import { useEffect, useState } from 'react';
function ChatList(): JSX.Element {
  const roomLists = useRecoilValue<IChatRoom[]>(roomList);
  const [selectedRoomId, setSelectedRoomId] = useRecoilState<number>(selectedRoom);
  const [view, setView] = useRecoilState<string>(orderChat); 
  const [isSearchVisible, setIsSearchVisible] = useRecoilState(isSearch);
  const [filterChat, setFilterChat] = useState(roomLists);
  useEffect(() => {
    const sortedRoomLists =
      view === '최신순'
        ? roomLists.slice().sort((a, b) => b.messages[b.messages.length - 1].id - a.messages[a.messages.length - 1].id)
        : roomLists.slice().sort((a, b) => a.messages[a.messages.length - 1].id - b.messages[b.messages.length - 1].id);
    setFilterChat(sortedRoomLists);
  }, [roomLists, view]);
  const filterChats = (input: string): void => {
    const filteredChat = roomLists.filter((room) =>
      room.username.includes(input) ||
      room.messages.some(message => message.message.includes(input))
    );
    setFilterChat(filteredChat);
  };
  
  return (
    <ChatListWrapper className={`${isSearchVisible ?  'show' : ''}`}>
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
  overflow : scroll;
  &.show{
    margin-top : 50px;
  }
`;