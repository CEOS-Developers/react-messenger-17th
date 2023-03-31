import {useRecoilState,useRecoilValue } from 'recoil';
import { ChatContentWrapper } from '../styles/style.chatcontent';
import {roomList,userInfo,prevTime,prevUser} from '../store/atom';
import ChatItem from './ChatItem';
import {useRef,useEffect} from 'react';
function ChatContent(): JSX.Element {
  const roomLists = useRecoilValue(roomList);
  const currentUser = useRecoilValue(userInfo);
  const chatList = roomLists[0].messages;
  const chatContent = useRef<HTMLDivElement>(null);
  
  const scrollChat = () => {
    if (chatContent.current)
      chatContent.current.scrollTop = chatContent.current.scrollHeight;
  }
  
  useEffect(() => {
    scrollChat();
  },[roomLists]);
  
  useEffect(() => {
    scrollChat();
  },[currentUser]);
  
  return (
    <ChatContentWrapper ref = {chatContent}>
      {chatList.map((item,index) => {
        const time = new Date(item.id);
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let hourFormat = hours < 12 ? `오전 ${hours}` : `오후 ${hours-12}`;
        let minFormat = minutes < 10 ? `0${minutes}` : minutes.toString();
        
        const madeTime = hourFormat + ":" + minFormat;
      return (
        <ChatItem
          key={item.id}
          id={item.id}
          userid={item.userid}
          message={item.message}
          time = {madeTime}
          /> 
      );
    })}
    </ChatContentWrapper>
  );
}

export default ChatContent;