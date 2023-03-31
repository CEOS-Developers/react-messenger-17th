import React, { useState, useCallback } from "react";
import styled from "styled-components";

interface InsertMsgProps {
  onConcat: (text: string) => void;
}

const InsertMsg = ({ onConcat }: InsertMsgProps) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [value]
  );

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onSubmit();
      e.preventDefault();
    }
  };

  const onSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (value.length == 0) {
      return;
    }
    e?.preventDefault();
    onConcat(value);
    setValue("");
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <InputField
        required
        value={value}
        onChange={onChange}
        onKeyPress={handleEnter}
      />
      <SendButton>전송</SendButton>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  height: 15%;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
`;
const InputField = styled.textarea`
  flex: 1;
  border: none;
  padding: 10px;
  word-break: break-all;
`;
const SendButton = styled.button`
  width: 80px;
  background-color: yellow;
  border: none;
  border-radius: 5px;
`;

export default InsertMsg;
