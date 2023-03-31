import { useState, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inputTextState, isTypingState, userState } from "../recoil/recoil";
import styled from "styled-components";
import SmallButton from "../components/SmallButton";
import Profile from "../components/Profile";
import LeftChat from "../components/LeftChat";
import RightChat from "../components/RightChat";
import { chatInterface } from "../json/interface";
import chatsData from "../json/chatsData.json";

const ChattingRoom = () => {
  // const [chatList, setChatList] = useRecoilState(currentChatListState); // TODO - recoil 사용.
  const [chatList, setChatList] = useState<chatInterface[]>(
    chatsData.chattings[0].chatList
  );

  const me = useRecoilValue(userState); // 접속 user obj

  const [inputText, setInputText] = useRecoilState<string>(inputTextState);
  const isTyping = useRecoilValue<boolean>(isTypingState);

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
    setChatList([
      ...chatList,
      {
        userId: 0,
        message: inputText,
        date: String(new Date()),
        chatId: `ex${chatList.length}`,
      },
    ]);
    setInputText("");
    textareaRef.current?.focus();
  };

  useEffect(() => {
    bottomDivRef.current?.scrollIntoView(false);
  }, [chatList]);

  return (
    <Wrapper>
      <Header>
        <SmallButton text={"<"} handleClick={() => console.log("hehe")} />
        <Profile
          imageSrc={
            "https://imageirl.imageresizer.io/pRKCViJVl1-s895x715-q85.jpg"
          }
          name="Phoebe 🐈"
        />
        <SmallButton text={"⋮"} handleClick={() => console.log("hehe")} />
      </Header>

      <Main>
        {chatList.map((chat: chatInterface) => {
          if (chat.userId === me.userId) {
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
                imgSrc={
                  "https://imageirl.imageresizer.io/pRKCViJVl1-s895x715-q85.jpg"
                }
                name={"Phoebe 🐈"}
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
  }
`;

export default ChattingRoom;
