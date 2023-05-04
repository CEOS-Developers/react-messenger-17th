import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
function Main(): JSX.Element {
  return (
    <>
      <ChatHeader />
      <ChatContent roomid = {2}/>
      <ChatInput roomid = {2}/>
    </>
  )
}

export default Main;