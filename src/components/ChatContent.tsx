import {useRecoilState } from 'recoil';
import { ChatContentWrapper } from '../styles/style.chatcontent';
import {roomList} from '../store/atom';
import ChatItem from './ChatItem';
function ChatContent(): JSX.Element {
  const [roomLists, setChatLists] = useRecoilState(roomList);
  const chatList = roomLists[0].messages;
  
  return (
    <ChatContentWrapper>
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