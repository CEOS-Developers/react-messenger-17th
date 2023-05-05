import {useRecoilState,useRecoilValue} from 'recoil';
import {useState,useRef,useEffect} from 'react';
import {ChatInputWrapper, Input, SubmitButton} from '../styles/style.chatinput';
import {FaTelegramPlane} from 'react-icons/fa';
import {IChatRoom,IUser,IRoomId} from '../store/interface';
import {roomList,userInfo,partnerInfo,roomInfo} from '../store/atom';

function ChatInput({roomid} : IRoomId) : JSX.Element {
  const currentUser = useRecoilValue<IUser>(userInfo);
  const partnerUser = useRecoilValue<IUser>(partnerInfo);
  const roomId = useRecoilValue<Number>(roomInfo);
  const [roomLists, setRoomLists] = useRecoilState<IChatRoom[]>(roomList);
  const [inputValue, setInputValue] = useState<string>("");
  const roomIndex = roomLists.findIndex((room) => room.roomid === roomId);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if(!inputValue.trim()){
      setInputValue('');
      return;
    }
    const newMessage = {
      id : Date.now(),
      userid : currentUser.userid,
      message : inputValue
    };
    console.log(roomIndex);
    if(roomIndex ===-1){ //기존에 방이 없는 경우
      const newRoom = {
        "roomid" : partnerUser.userid,
        "userid" : partnerUser.userid,
        "username" : partnerUser.username,
        "messages" : [newMessage]
      }
      setRoomLists([
        ...roomLists, newRoom,
      ])
    }
    else{ //기존에 방이 있는 경우
      const newRoom = {
        ...roomLists[roomIndex],
        messages : [...roomLists[roomIndex].messages, newMessage],
      };
      setRoomLists([
        ...roomLists.slice(0,roomIndex),
        newRoom,
        ...roomLists.slice(roomIndex+1),
      ]);
    }
    console.log(roomLists);
    setInputValue("");
  };
  
  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  })
  return (
    <ChatInputWrapper onSubmit={handleSubmit}>
      <Input
        ref = {inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp = {handleKeyUp}
        placeholder="메세지를 입력해주세요"
      />
      {inputValue &&
        <SubmitButton><FaTelegramPlane/></SubmitButton>
      }
    </ChatInputWrapper>
  )
}

export default ChatInput;