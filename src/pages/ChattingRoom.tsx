import { useState, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentUsersState,
  typingUserState,
  // currentChatListState,
} from "../recoil/recoil";
import styled from "styled-components";
import SmallButton from "../components/SmallButton";
import Profile from "../components/Profile";
import LeftChat from "../components/LeftChat";
import RightChat from "../components/RightChat";
import { chatInterface } from "../interfaces/interface";
import chatsData from "../json/chatsData.json";
import Alert from "../components/Alert";

const ChattingRoom = () => {
  const currentUsers = useRecoilValue(currentUsersState);
  const [typingUser, setTypingUser] = useRecoilState(typingUserState);
  const nonTypingUser = currentUsers.filter(
    (user) => user.userId !== typingUser.userId
  )[0];
  const [chatList, setChatList] = useState<chatInterface[]>(
    chatsData.chattings[0].chatList
  ); // TODO - recoil로 변경
  // const [chatList, setChatList] = useRecoilState(currentChatListState);

  const [inputText, setInputText] = useState<string>("");
  const isTyping: boolean = inputText.trim() ? true : false;

  const [isVisibleAlert, setIsVisibleAlert] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomDivRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (inputText.trim()) {
      setChatList([
        ...chatList,
        {
          userId: typingUser.userId,
          message: inputText,
          date: String(new Date()),
          chatId: `ex${chatList.length}`,
        },
      ]);
      setInputText("");
      textareaRef.current?.focus();
    } else {
      setInputText("");
      alert("메세지를 입력해주세요 :)");
    }
  };

  const hadleNotyetClick = () => {
    setIsVisibleAlert(true);
  };

  useEffect(() => {
    bottomDivRef.current?.scrollIntoView(false);
  }, [chatList]);

  useEffect(() => {
    setTimeout(() => setIsVisibleAlert(false), 3000);
  }, [isVisibleAlert]);

  return (
    <Wrapper>
      <Header>
        <SmallButton text={"<"} handleClick={hadleNotyetClick} />
        <Profile nonTypingUser={nonTypingUser} setTypingUser={setTypingUser} />
        <SmallButton text={"⋮"} handleClick={hadleNotyetClick} />
      </Header>

      <Main>
        {chatList.map((chat: chatInterface) => {
          if (chat.userId === typingUser.userId) {
            return (
              <RightChat
                key={chat.chatId}
                message={chat.message}
                date={chat.date}
              />
            );
          } else {
            return (
              <LeftChat
                key={chat.chatId}
                imgSrc={nonTypingUser.profileImage}
                name={nonTypingUser.userName}
                message={chat.message}
                date={chat.date}
              />
            );
          }
        })}
        <div ref={bottomDivRef}></div>
      </Main>

      <Form isTyping={isTyping} onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          onKeyUp={handleEnter}
          autoFocus
          spellCheck="false"
          ref={textareaRef}
        ></textarea>
        <button>전송</button>
      </Form>
      {isVisibleAlert && <Alert />}
    </Wrapper>
  );
};

let Wrapper = styled.div`
  width: 20rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  color: var(--dark-gray-tag);
  background-color: var(--light-blue-tag);
  box-shadow: 0 0 20px rgba(0, 0, 0, 20%);

  position: relative;
`;

let Header = styled.header`
  width: calc(100% - 2rem);
  height: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;

  &:last-child {
    margin: 0 0 0 auto;
  }
`;

let Main = styled.main`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem - 8rem);
  padding: 0.5rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.3rem;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-font);
    border-radius: 1rem;
  }
`;

let Form = styled.form<{ isTyping?: boolean }>`
  width: calc(100% - 2rem);
  height: 4rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: white;

  textarea {
    width: 13rem;
    height: 100%;
    margin: 0;
    font-family: "Pretendard-Regular";
    border: none;
    resize: none;

    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 0.3rem;
      height: 100%;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--gray-font);
      border-radius: 1rem;
    }
  }

  button {
    width: 4rem;
    height: 100%;
    margin: 0 0 0 auto;
    border: 1px solid transparent;
    border-radius: 0.2rem;
    color: ${(props) => (props.isTyping ? "black" : "var(--gray-font)")};
    background-color: ${(props) =>
      props.isTyping ? "var(--yellow-tag)" : "var(--light-gray-tag)"};
    cursor: pointer;
  }
`;

export default ChattingRoom;
