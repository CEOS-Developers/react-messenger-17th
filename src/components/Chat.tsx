import {useRecoilState } from 'recoil';
import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
function Main(): JSX.Element {
    
  return (
    <>
      <ChatHeader />
      <ChatContent/>
      <ChatInput/>
    </>
  )
}

export default Main;