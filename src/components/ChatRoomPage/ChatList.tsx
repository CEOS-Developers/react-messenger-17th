import React from 'react';
import Chat from './Chat';
import { useRecoilValue } from 'recoil';
import { chatState } from '../../state/atom';

const ChatList = () => {
  const chats = useRecoilValue(chatState);

  return (
    <div>
      {chats.map((chat, idx) => (
        <Chat key={idx} {...chat} />
      ))}
    </div>
  );
};

export default ChatList;
