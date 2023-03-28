import { useRecoilState, useRecoilValue } from "recoil";
import { inputTextState, isTypingState } from "../recoil/recoil";
import styled from "styled-components";
import SmallButton from "../components/SmallButton";
import Profile from "../components/Profile";
import LeftChat from "../components/LeftChat";
import RightChat from "../components/RightChat";

const ChattingRoom = () => {
  const [inputText, setInputText] = useRecoilState<string>(inputTextState);
  const isTyping = useRecoilValue<boolean>(isTypingState);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

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
        <LeftChat
          imgSrc={
            "https://imageirl.imageresizer.io/pRKCViJVl1-s895x715-q85.jpg"
          }
          name={"Phoebe 🐈"}
          message={"smelly cat"}
          time={new Date()}
        />
        <RightChat message={"smelly cat ~"} time={new Date()} />
      </Main>

      <Form isTyping={isTyping}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          autoFocus
          spellCheck="false"
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

  // &:nth-child(2) {
  //   width: calc(100% - 6rem);
  //   padding: 0 0.5rem;
  // }

  &:last-child {
    margin: 0 0 0 auto;
  }
`;

let Main = styled.main`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem - 8rem);
  padding: 0 1rem;
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
