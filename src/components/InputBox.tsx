import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {ChatRoom, Chat} from '../interface/interface';
import {userDorm, activeRoomSelector, activeOtherSelector, activeSender, chatList} from '../recoil';

const Container = styled.div`
  display: flex;
  width: 99.5%;
  height: 4rem;
  opacity: 0.8;
  border: solid 0.5px black;
  z-index: 5;
  bottom: 3rem;
  margin-left: 1rem;
`;

const TextInput = styled.input`
  position: relative;
  width: 20rem;
  height: 75%;
  padding: 0 3px 0 3px;
  margin: 2% 3px 1px 5px;
  background-color: white;
  opacity: 0.8;
  font-size: 13px;
  color: black;
  border: none;
  overflow: hidden;
`;
const InputButton = styled.button`
  position: relative;
  background-color: #827694;

  background-size: cover;
  font-size: 15px;
  width: 3rem;
  height: 75%;
  margin-left: 5px;
  text-align: center;
  border: solid 1px grey;
  border-radius: 20%;
  cursor: pointer;
`;

const InputBox = () => {
    const active = useRecoilValue(activeSender);
    const roomInfo = useRecoilValue(activeRoomSelector);
    const [button, setButton] = useState(true);
    const [chats, setChats] = useRecoilState(chatList);
    const [rooms, setRooms] = useState(chats[roomInfo!.roomId]);
    const [addChatList, setChat] = useState(chats[roomInfo!.roomId].chat);
    const searchList = useRecoilValue(chatList);

    const [value, setValue] = useState('');


  const addChat = (value: string)  => {
    if(value.trim()){
        let newChat: Chat;

        newChat = {
            sender: active,
            chat: value,
        };

        const updatedRooms = {...rooms};
        updatedRooms.chat = updatedRooms.chat.concat(newChat);
        setRooms(updatedRooms);

        const updatedChats = [...chats];
        updatedChats[roomInfo!.roomId] = updatedRooms;
        setChats(updatedChats)


    }
    setValue('');
  };

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      e.target.value.trim() == '' ? setButton(true) : setButton(false);
      setValue(e.target.value);
    },
    [setValue]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addChat(value);
    setValue('');
    setButton(true);
  };


  return (
    <Container>
      <form onSubmit={onSubmit}>
        <TextInput
          type="text"
          value={value}
          onChange={onChange}
          //ref={inputRef}
        ></TextInput>
        <InputButton disabled={button}>🪄</InputButton>
      </form>
    </Container>

  );
};

export default InputBox;