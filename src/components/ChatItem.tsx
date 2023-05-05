import {useRecoilValue} from 'recoil';
import {userDorm, activeRoomSelector, activeOtherSelector, activeSender} from '../recoil';
import styled from 'styled-components';

const ChatBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width : 100%;
`;
const TextBox = styled.div<{ isActive_1: number; isActive_2: number }>`
  background-color: ${(props) =>
    props.isActive_1 != props.isActive_2 ? '#FAF55C' : '#F7DEF7'};
  color: black;
  height: 1.5rem;
  font-size: 15px;
  width: max-content;
  margin-left: ${(props) => (props.isActive_1 != props.isActive_2 ? 'auto' : '7px')};
  margin-right: 10px;
  margin-top: 17px;
  margin-bottom: 3px;
  padding: 5px 7px 3px 6px;
  border-radius: 3%;
  opacity: 0.8;
`;
const Profile = styled.div<{ isActive_1: number; isActive_2: number }>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  background-position: center;
  margin: 5px 10px 3px 10px;
  background-size: cover;
  border: solid 1px #ffccff;
  opacity: 0.9;
  display: ${(props) => (props.isActive_1 != props.isActive_2 ? 'none' : 'flex')};
`;

const ChatItem = ({sendId, msg} : {sendId: number, msg: string} ) => {
    const active = useRecoilValue(activeSender);
    const user = useRecoilValue(userDorm);
    const roomInfo = useRecoilValue(activeRoomSelector);
    const other =  useRecoilValue(activeOtherSelector);
    console.log(active)
    console.log(other?.userId)
    console.log(roomInfo!.roomId)

    return(
        <ChatBox>
            <Profile isActive_1={sendId} isActive_2={roomInfo!.roomId} />
            <TextBox isActive_1={sendId} isActive_2={roomInfo!.roomId}>{msg}</TextBox>
        </ChatBox>

    );

};

export default ChatItem