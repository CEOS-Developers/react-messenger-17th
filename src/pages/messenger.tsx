import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useRecoilValue } from 'recoil';
import { userGroup } from '../utils/atom';
import { UserInfoType } from '../utils/type';
import { flexCenter } from '../styles/theme';
import ToggleSwitch from '../components/ToggleSwitch';
import Header from 'components/Header';
import Send from '../assets/icon-send.png';
import Save from '../assets/icon-save.png';

const Messenger = () => {
  // 내 유저 아이디
  const [curUserId, setCurUserId] = useState<number>(1);

  // 상대 유저 아이디
  const [otherUserId, setOtherUserId] = useState<number>(2);

  // 채팅 내역 창고
  const [messageStorage, setMessageStorage] = useState([
    {
      userId: 1,
      data: 'sample',
      timestamp: new Date().toString(),
    },
  ]);

  const input = useInput('');

  const curUserGroup = useRecoilValue(userGroup);
  // console.log('curUserGroup', curUserGroup);

  // 내 아이디 <-> 상대 아이디
  const handleUserToggle = useCallback(
    (e: any) => {
      setOtherUserId(curUserId);
      setCurUserId(otherUserId);
    },
    [curUserId, otherUserId]
  );

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageStorage]);

  // console.log('messageStorage', messageStorage);
  // console.log('curUserId', curUserId);
  // console.log('otherUserId', otherUserId);

  const scrollRef = useRef<null | HTMLDivElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (input.value.trim() === '') return;

    const newMessage = {
      userId: curUserId,
      data: input.value,
      timestamp: new Date().toString(),
    };

    // console.log('newMessage', newMessage);

    setMessageStorage([...messageStorage, newMessage]);
    // input 초기화
    input.setValue('');
    e.target.reset();
  };

  const setDateFormat = (date: string) => {
    const hours = new Date(date).getHours().toString().padStart(2, '0');
    const minutes = new Date(date).getMinutes().toString().padStart(2, '0');
    // console.log(hours, ': ', minutes);
    return `${hours}:${minutes}`;
  };

  const getUserNameById = (userId: number) => {
    const name = curUserGroup.find((user) => user.userId === userId)?.name;
    // console.log('name: ', name);
    return name;
  };

  // 유저 정보랑 채팅 내역 json으로 저장하는 함수
  const saveToJson = (e: any) => {
    e.preventDefault();

    const userState = curUserGroup.find((item) => item.userId === curUserId);
    const otherUserState = curUserGroup.find(
      (item) => item.userId === otherUserId
    );
    // console.log('userState', userState, otherUserState);

    const combine = [userState, otherUserState, ...messageStorage];

    const jsonCombine = JSON.stringify(combine);
    const blob = new Blob([jsonCombine], { type: 'application/json' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'chatting_info.json';
    link.click();
  };
  return (
    <Wrapper>
      <Header title={'채팅'}>
        <ToggleSwitch
          className="icon-right"
          handleUserToggle={handleUserToggle}
        />

        {/*
        <button type="button" className="icon-right" onClick={handleUserToggle}>
          유저 토글
        </button>
        */}
      </Header>

      <MessageContainer ref={scrollRef}>
        {/* 채팅 내역 쌓이는 컴포넌트 */}
        {messageStorage &&
          messageStorage.map((message, idx) => (
            <Message key={idx} curUser={message.userId === curUserId}>
              <ProfileImg
                alt="profile-img"
                src={require(`../assets/${message.userId}.png`)}
              />
              <div className="chat-group">
                <span className="nickname">
                  {getUserNameById(message.userId)}
                </span>{' '}
                <div className="chat-data">
                  <span className="message">{message.data}</span>
                  <span className="timestamp">
                    {setDateFormat(message.timestamp)}
                  </span>
                </div>
              </div>
            </Message>
          ))}
      </MessageContainer>
      <Form onSubmit={handleSubmit}>
        <button type="button" onClick={saveToJson}>
          <Icon alt="icon-save" src={Save} />
        </button>
        <input
          type="text"
          className="chatting-input"
          onChange={input.onChange}
          autoFocus
        />
        <button type="submit">
          <Icon alt="icon-send" src={Send} />
        </button>
      </Form>
    </Wrapper>
  );
};

export default Messenger;

const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  display: inline-block;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  padding: 0 0.5rem;
  margin: 1rem 0;
  box-sizing: border-box;

  .chatting-input {
    width: 90%;
    height: auto;
    padding: 0.6rem;
    border: 1px solid grey;
    border-radius: 20px;
  }
`;

const Wrapper = styled.main`
  ${flexCenter}
  flex-direction: column;
  width: 30rem;
  height: 50rem;
  border-radius: 2rem;
  background: radial-gradient(
      178.94% 106.41% at 26.42% 106.41%,
      #fff7b1 0%,
      rgba(255, 255, 255, 0) 71.88%
    )
    #ffffff;

  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01),
    0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09),
    0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);

  .title {
  }
`;

const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40rem;
  background-color: pink;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const Message = styled.div<{ curUser: boolean }>`
  display: flex;
  flex-direction: ${({ curUser }) => (curUser ? 'row-reverse' : 'row')};
  // justify-content: ${({ curUser }) => (curUser ? 'flex-end' : 'flex-start')};
  align-items: center;
  gap: 1rem;

  .chat-group {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    .nickname {
      display: flex;
      justify-content: ${({ curUser }) =>
        curUser ? 'flex-end' : 'flex-start'};
    }

    .chat-data {
      display: flex;
      flex-direction: ${({ curUser }) => (curUser ? 'row-reverse' : 'row')};
      .message {
      }
      .timestamp {
      }
    }
  }
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: inline-block;
`;
