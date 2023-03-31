import {useRecoilState } from 'recoil';
import {useState} from 'react';
import {ChatInputWrapper, Input, SubmitButton} from '../styles/style.chatinput';
import {FaTelegramPlane} from 'react-icons/fa';
function ChatInput() : JSX.Element {
  
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!inputValue.trim())
        return;
        
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