import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ChattingRoom } from '../../interface/interface';
import { selectedUser, chatList } from '../../atom/atom';
import userList from '../../json/users.json';
import { useState } from 'react';

const Talk = ({ chattingRoomId, messageId }: ChattingRoom) => {
  const selected = useRecoilValue(selectedUser);
  const chattingList = useRecoilValue(chatList);

  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [sympathy, setSympathy] = useState<boolean>(false);

  const chatTime = (time: string) => {
    let now = new Date(time);

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let hoursSetting = hours < 12 ? `오전 ${hours}` : `오후 ${hours - 12}`;
    const minutesSetting: string = String(minutes).padStart(2, '0');

    return hoursSetting + ':' + minutesSetting;
  };

  return (
    <>
      {selected === chattingList[chattingRoomId].message[messageId].userNum ? (
        <Chat>
          {
            <Time>
              {chatTime(chattingList[chattingRoomId].message[messageId].date)}
            </Time>
          }
          <NowUser>
            {chattingList[chattingRoomId].message[messageId].addText}{' '}
          </NowUser>
        </Chat>
      ) : (
        <Chat>
          <PartnerImage
            src={`/images/${chattingList[chattingRoomId].message[messageId].userNum}.jpg`}
          />
          <Contents
            onMouseEnter={() => {
              setShowBtn(true);
            }}
            onMouseLeave={() => {
              setShowBtn(false);
            }}
          >
            <PartnerName>
              {
                userList[
                  chattingList[chattingRoomId].message[messageId].userNum
                ].userName
              }
            </PartnerName>
            <Content>
              <CounterPart>
                {chattingList[chattingRoomId].message[messageId].addText}
              </CounterPart>
              {
                <Time>
                  {chatTime(
                    chattingList[chattingRoomId].message[messageId].date
                  )}
                </Time>
              }
              <div className={`list ${showBtn ? 'show' : 'hide'}`}>
                <Button onClick={() => setSympathy(true)}>
                  <div className="heart">{'♥'}</div>
                </Button>
              </div>
            </Content>
            <div className={`heart ${sympathy ? 'show' : 'hide'}`}>
              <Heart
                src={`/images/sympathy.png`}
                onClick={() => setSympathy(false)}
              ></Heart>
            </div>
          </Contents>
        </Chat>
      )}
    </>
  );
};
const Heart = styled.img`
  height: 0.8rem;
  background-color: white;
  margin: 0.3rem 0 0 0.5rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  :hover {
    filter: opacity(50%);
    cursor: pointer;
  }
`;
const Button = styled.button`
  background-color: rgb(234 234 234 / 76%);
  border: none;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.3rem;
  .heart {
    width: 1rem;
    height: 1rem;
    font-size: 1.1rem;
    margin: 0 0 0.3rem 0.25rem;
    :hover {
      filter: opacity(25%);
      cursor: pointer;
    }
  }
`;
const Time = styled.div`
  font-size: 0.5rem;
  margin-top: auto;
  padding: 0.2rem;
  margin-left: auto;
`;
const PartnerImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 0.2rem;
  border-radius: 0.8rem;
`;
const PartnerName = styled.div`
  font-size: 0.7rem;
  padding: 0.2rem 0 0.3rem 0.5rem;
`;
const Content = styled.div`
  display: flex;

  .list.show {
    margin-left: 0.5rem;
    margin-top: auto;
  }
  .list.hide {
    display: none;
  }
`;
const Contents = styled.div`
  display: block;

  .heart.show {
    font-size: 20px;
  }
  .heart.hide {
    display: none;
  }
`;
const Chat = styled.div`
  margin: 1rem 0.5rem 0.5rem 0.5rem;
  word-break: break-all;
  border-radius: 7px;
  display: flex;
`;
const NowUser = styled.div`
  max-width: 10rem;
  width: auto;
  margin-right: 0.2rem;
  background-color: rgb(252, 243, 52);
  border-radius: 7px;
  font-size: 14px;
  padding: 6px;
  padding-top: 9px;
`;

const CounterPart = styled.div`
  max-width: 10rem;
  margin-left: 0.5rem;
  width: auto;
  background-color: white;
  border-radius: 7px;
  font-size: 14px;
  padding: 6px;
  padding-top: 9px;
`;

export default Talk;
