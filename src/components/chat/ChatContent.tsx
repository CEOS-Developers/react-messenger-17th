import {useRecoilValue} from 'recoil';
import { ChatContentWrapper } from '../../styles/style.chatcontent';
import {roomList,userInfo,roomInfo} from '../../store/atom';
import ChatItem from './ChatItem';
import {useRef,useEffect} from 'react';
import {IChatRoom, IUser,IMessage,IRoomId} from '../../store/interface';
function ChatContent({roomid} : IRoomId): JSX.Element {
  const roomLists = useRecoilValue<IChatRoom[]>(roomList);
  const roomId = useRecoilValue<Number>(roomInfo);
  const roomIndex = roomLists.findIndex((room) => room.roomid === roomId);
  const currentUser = useRecoilValue<IUser>(userInfo);
  const chatList : IMessage[] = roomLists[roomIndex]?.messages || [];
  const chatContent = useRef<HTMLDivElement>(null);
  const prevTimeValue = useRef<String | null>(null);
  let prevUserValue = -1;
  const scrollChat = () => {
    if (chatContent.current){
      chatContent.current.scrollTop = chatContent.current.scrollHeight;
    }
  }
  const makeTime = (time : number) =>{
    const newTime = new Date(time);
    let hours = newTime.getHours();
    let minutes = newTime.getMinutes();
    let hourFormat = hours < 12 ? `오전 ${hours}` : `오후 ${hours-12}`;
    let minFormat = minutes < 10 ? `0${minutes}` : minutes.toString();
    const madeTime = hourFormat + ":" + minFormat;
    return madeTime;
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
        let time = makeTime(item.id);
        let showTime = true;
        let showUser = false;
        if(chatList.length -1 !== index){
          let nextTime = makeTime(chatList[index+1].id);
          if(chatList[index+1].userid === item.userid && time === nextTime){
            showTime = false;
          }
        }
        if(prevUserValue === item.userid && prevUserValue !== null){
          showUser = true;
        }
        if( prevTimeValue.current !== time)
          showUser = false;
        prevTimeValue.current = time;
        prevUserValue = item.userid;
      return (
        <ChatItem
          key={item.id}
          id={item.id}
          userid={item.userid}
          message={item.message}
          time = {showTime ? time : ''}
          user = {showUser}
          /> 
      );
    })}
    </ChatContentWrapper>
  );
}

export default ChatContent;