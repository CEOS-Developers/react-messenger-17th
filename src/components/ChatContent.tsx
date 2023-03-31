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
  },[roomLists,currentUser]);
  
  return (
    <ChatContentWrapper ref = {chatContent}>
      {chatList.map((item,index) => {
        const time = new Date(item.id);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const madeTime = hours + ":" + minutes;
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