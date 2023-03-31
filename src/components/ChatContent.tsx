import {useRecoilState } from 'recoil';
import { ChatContentWrapper } from '../styles/style.chatcontent';
import {roomList,userInfo} from '../store/atom';
import ChatItem from './ChatItem';
import {useRef,useEffect} from 'react';
function ChatContent(): JSX.Element {
  const [roomLists] = useRecoilState(roomList);
  const [currentUser] = useRecoilState(userInfo);
  const chatList = roomLists[0].messages;
  const chatContent = useRef<HTMLDivElement>(null);
  
  const scrollChat = () => {
    if (chatContent.current)
      chatContent.current.scrollTop = chatContent.current.scrollHeight;
  }
  
  useEffect(() => {
    scrollChat();
  },[roomLists,currentUser])
  return (
    <ChatContentWrapper ref = {chatContent}>
      {chatList.map((item) => (
        <ChatItem
          key={item.id}
          id={item.id}
          userid={item.userid}
          message={item.message}/>   
      ))}
    </ChatContentWrapper>
  )
}

export default ChatContent;