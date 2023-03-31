import {useRecoilState } from 'recoil';
import {useState} from 'react';
import {ChatInputWrapper, Input, SubmitButton} from '../styles/style.chatinput';
import {FaTelegramPlane} from 'react-icons/fa';
import {IChatRoom} from '../store/interface';
import {roomList,userInfo} from '../store/atom';

function ChatInput() : JSX.Element {
  const [currentUser] = useRecoilState(userInfo);
  const [roomLists, setRoomLists] = useRecoilState<IChatRoom[]>(roomList);
  const [inputValue, setInputValue] = useState("");
  const roomIndex = roomLists.findIndex((room) => room.roomid === 1);
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!inputValue.trim())
      return;
    const newMessage = {
        id : Date.now(),
        userid : currentUser.userid,
        message : inputValue
    };
    const newRoom = {
        ...roomLists[roomIndex],
        messages : [...roomLists[roomIndex].messages, newMessage],
    };
    
    setRoomLists([
        ...roomLists.slice(0,roomIndex),
        newRoom,
        ...roomLists.slice(roomIndex+1),
    ]);
    setInputValue("");
  };
  return (
    <ChatInputWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="메세지를 입력해주세요"
      />
      {inputValue &&
        <SubmitButton><FaTelegramPlane/></SubmitButton>
      }
    </ChatInputWrapper>
  )
}

export default ChatInput;