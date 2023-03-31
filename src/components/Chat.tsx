import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
function Main(): JSX.Element {
    
  return (
    <>
      <ChatHeader />
      <ChatContent roomid = {1}/>
      <ChatInput roomid = {1}/>
    </>
  )
}

export default Main;