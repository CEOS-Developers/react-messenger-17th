import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatState, currentUserState } from '../../state/atom';
import styled from 'styled-components';

const ChatInput = () => {
  const [text, setText] = useState('');
  const [chats, setChats] = useRecoilState(chatState);
  const currentUser = useRecoilValue(currentUserState);

  const addChat = () => {
    setChats([
      ...chats,
      { userId: currentUser.userId, content: text, time: currentTime() },
    ]);
  };

  const currentTime = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

    return hours + ':' + minutes;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) {
      return;
    }

    addChat();

    setText(''); //초기화
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} required></input>
      <button>전송</button>
    </form>
  );
};

export default ChatInput;
