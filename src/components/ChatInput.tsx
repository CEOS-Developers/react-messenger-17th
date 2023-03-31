import {useRecoilState } from 'recoil';
import {ChatInputWrapper, Input, SubmitButton} from '../styles/style.chatinput';
import {FaTelegramPlane} from 'react-icons/fa';
function ChatInput() : JSX.Element {
  
  return (
    <ChatInputWrapper>
      <Input
        placeholder="메세지를 입력해주세요"
      />
      <SubmitButton><FaTelegramPlane/></SubmitButton>
    </ChatInputWrapper>
  )
}

export default ChatInput;