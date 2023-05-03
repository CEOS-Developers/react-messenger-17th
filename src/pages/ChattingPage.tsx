import Header from '../component/chatting/header';
import ChattingContent from '../component/chatting/chattingContent';
import InputChat from '../component/chatting/inputChat';
import { useLocation } from 'react-router-dom';

const ChattingPage = () => {
  const { state } = useLocation();

  return (
    <>
      <Header chattingRoomId={state} messageId={state} />
      <ChattingContent chattingRoomId={state} messageId={state} />
      <InputChat chattingRoomId={state} messageId={state} />
    </>
  );
};

export default ChattingPage;
