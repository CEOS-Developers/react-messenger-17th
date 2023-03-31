import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 350px;
  box-sizing: border-box;
`;

const InputForm = styled.textarea`
  font-size: 12px;
  display: flex;
  border: none;
  border-radius: 20%;
  outline: none;
  resize: none;
  padding: 10px;
  height: 80%;
  width: 100%;
  box-sizing: border-box;
  word-break: break-all;
`;

const Button = styled.button`
  font-size: 12px;
  background-color: #ececec;
  margin: 5px 5px;
  width: 20%;
  height: 30%;
  border: none;
  border-radius: 10px;
`;

interface ChatInputProps {
  addChat: (text: string) => void;
}

function ChatInput({ addChat }: ChatInputProps) {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [value]
  );

  const onSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (value.trim().length === 0) {
      return;
    }
    e?.preventDefault();
    addChat(value);
    setValue('');
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (value.trim() === '') {
        e.preventDefault();
      } else {
        onSubmit();
      }
    }
  };

  return (
    <>
      {
        <Wrapper onSubmit={onSubmit}>
          <InputForm
            required
            value={value}
            onChange={onChange}
            onKeyPress={handleEnter}
          />
          <Button>전송</Button>
        </Wrapper>
      }
    </>
  );
}

export default ChatInput;
