import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
// import cloneDeep from "lodash/cloneDeep";
// components
import Profile from "../components/organisms/Profile";
import ChatBubble from "../components/organisms/ChatBubble";
import DropdownMenu from "../components/organisms/DropdownMenu";
import { BackArrow } from "../components/icons/BackArrow";
// utils
import {
  meAtom,
  roomInfoAtomFamily,
  chatListSelectorFamily,
  currentUsersAtomFamily,
} from "../recoil/recoil";
import {
  userInterface,
  chattingInterface,
  chatInterface,
} from "../types/interfaces";
import useInput from "../hooks/useInput";
// styles
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
// constants
import { BUBBLEMENU } from "../constants/MENU_NAME";
import { getDateString } from "../utils/getDateString";

const ChattingRoom = () => {
  const cloneDeep = require("lodash/cloneDeep");

  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;
  const roomId: number = locationState.roomId;

  const [inputText, handleInputChange, resetInput] = useInput("");
  const isTyping: boolean = inputText.trim() ? true : false;

  const roomInfo = useRecoilValue<chattingInterface>(
    roomInfoAtomFamily(roomId)
  );
  const [chatList, setChatList] = useRecoilState<chatInterface[]>(
    chatListSelectorFamily({ roomId })
  );
  const me = useRecoilValue<userInterface>(meAtom);
  const currentUsers = useRecoilValue<userInterface[]>(
    currentUsersAtomFamily(roomInfo.userIdList)
  );
  const [typingUser, setTypingUser] = useState<userInterface>(me);
  const nonTypingUser: userInterface = currentUsers.filter(
    (user) => user !== typingUser
  )[0];

  const [isRightClicking, setIsRightClicking] = useState<boolean>(false);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [clickedBubbleInfo, setClickedBubbleInfo] = useState<chatInterface>({
    userId: 0,
    message: "",
    date: "",
    chatId: "",
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomDivRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate("/chattings");
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
          message: inputText.trim(),
          date: String(new Date()),
          chatId: `${roomId}${typingUser.userId}${new Date().getTime()}`,
        },
      ]);
    }
    resetInput();
    textareaRef.current?.focus();
  };

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== dropdownRef.current?.lastChild) {
      setIsRightClicking(false);
    }
  };

  const showDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsRightClicking(!isRightClicking);
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const handleMenuClick = (menu: string) => {
    // '공감' 클릭
    if (menu === BUBBLEMENU[0]) {
      let tempChatList = cloneDeep(chatList);
      tempChatList.forEach((chat: chatInterface) => {
        if (chat.chatId === clickedBubbleInfo.chatId) {
          chat.liked = true;
        }
      });

      setChatList(tempChatList);
    }
    // '복사' 클릭
    else if (menu === BUBBLEMENU[1]) {
      window.navigator.clipboard.writeText(
        `[${
          currentUsers.filter(
            (user) => user.userId === clickedBubbleInfo.userId
          )[0].userName
        }] [${getDateString(clickedBubbleInfo.date)}] ${
          clickedBubbleInfo.message
        }`
      );
    }
    setIsRightClicking(false);
  };

  useEffect(() => {
    bottomDivRef.current?.scrollIntoView(false);
  }, [chatList, typingUser]);

  return (
    <Wrapper onContextMenu={handleRightClick} onClick={handleBgClick}>
      <Header>
        <IconWrapper onClick={handleBackClick}>
          <BackArrow width={15} height={15} />
        </IconWrapper>

        <Profile nonTypingUser={nonTypingUser} setTypingUser={setTypingUser} />
      </Header>

      <Main>
        {chatList.map((chat: chatInterface) => {
          return (
            <ChatBubble
              key={chat.chatId}
              isUser={chat.userId === typingUser.userId}
              chatInfo={chat}
              nonTypingUser={nonTypingUser}
              handleChatRightClick={showDropdown}
              setClickedBubbleInfo={setClickedBubbleInfo}
            />
          );
        })}
        <div ref={bottomDivRef}></div>
        {isRightClicking && (
          <div ref={dropdownRef}>
            <DropdownMenu
              coords={coords}
              menuList={BUBBLEMENU}
              handleMenuClick={handleMenuClick}
            />
          </div>
        )}
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

const IconWrapper = styled.div`
  width: 2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: var(--light-blue-hover-tag);
  }
`;

export default ChattingRoom;
