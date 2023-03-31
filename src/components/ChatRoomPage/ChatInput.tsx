import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatState, currentUserState } from '../../state/atom';
import styled from 'styled-components';
import { IoIosSend } from 'react-icons/io';

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
    <SendForm onSubmit={handleSubmit}>
      <SendInput
        type="text"
        value={text}
        onChange={handleChange}
        required
      ></SendInput>
      <SendBtn>
        <IoIosSend />
      </SendBtn>
    </SendForm>
  );
};

export default ChatInput;

const SendForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: white;

  border-radius: 0 0 2.3rem 2.3rem;
`;

const SendInput = styled.input`
  border: 1px solid rgb(179, 177, 177);
  border-radius: 6px;
  width: 22rem;
  height: 2.5rem;
  &:focus {
    outline: none;
  }
`;

const SendBtn = styled.button`
  padding: 0.25rem;
  margin-left: 0.3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
`;
