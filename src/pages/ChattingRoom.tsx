import { useState, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUsersState } from "../recoil/recoil";
import { chatInterface, userInterface } from "../interfaces/interface";
import usersData from "../json/usersData.json";
import chatsData from "../json/chatsData.json";
import Alert from "../components/Alert";
import SmallButton from "../components/SmallButton";
import Profile from "../components/Profile";
import LeftChat from "../components/LeftChat";
import RightChat from "../components/RightChat";
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";

const ChattingRoom = () => {
  const currentUsers = useRecoilValue<userInterface[]>(currentUsersState);
  const [typingUser, setTypingUser] = useState<userInterface>(
    usersData.users[0]
  );
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

  const handleEnterKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
  }, [chatList, typingUser]);

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
        {chatList.map((chat: chatInterface) =>
          chat.userId === typingUser.userId ? (
            <RightChat
              key={chat.chatId}
              message={chat.message}
              date={chat.date}
            />
          ) : (
            <LeftChat
              key={chat.chatId}
              imgSrc={nonTypingUser.profileImage}
              name={nonTypingUser.userName}
              message={chat.message}
              date={chat.date}
            />
          )
        )}
        <div ref={bottomDivRef}></div>
      </Main>

      <Form isTyping={isTyping} onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          onKeyUp={handleEnterKeyUp}
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

const Wrapper = styled(PageWrapStyled)`
  flex-direction: column;
  color: var(--dark-gray-tag);
  background-color: var(--light-blue-tag);
`;

const Header = styled.header`
  width: calc(100% - 2rem);
  height: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;

  &:last-child {
    margin: 0 0 0 auto;
  }
`;

const Main = styled.main`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem - 8rem);
  padding: 0.5rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Form = styled.form<{ isTyping?: boolean }>`
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
    overflow-y: scroll;

    &:focus {
      outline: none;
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
