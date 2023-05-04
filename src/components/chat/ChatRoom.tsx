import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IChat} from '../../store/interface';
interface IRoomInfo{
  roomid : number;
  userid : number;
  username : string;
  messages : string;
  time : number;
}
const makeTime = (time : number) =>{
  const newTime = new Date(time);
  let hours = newTime.getHours();
  let minutes = newTime.getMinutes();
  let hourFormat = hours < 12 ? `오전 ${hours}` : `오후 ${hours-12}`;
  let minFormat = minutes < 10 ? `0${minutes}` : minutes.toString();
  const madeTime = hourFormat + ":" + minFormat;
  return madeTime;
}
function ChatRoom({roomid, userid, username, messages,time} : IRoomInfo){
  return (
    <Wrapper to={`/chat/${roomid}`}>
        <UserImage src={`${process.env.PUBLIC_URL}/images/${userid}.jpg`} />
        <UserInfoWrapper>
          <UserName>{username}</UserName>
          <UserTime>{makeTime(time)}</UserTime>
          <UserStatus>{messages}</UserStatus>
        </UserInfoWrapper>
    </Wrapper>
  );
};
const Wrapper = styled(Link)`
  display: flex;
  height: 50px;
  padding: 5px;
  textDecoration: 'none';
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

`;

const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  user-select : none;
`;

const UserInfoWrapper = styled.div`
  width : 100%;
  display : grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr;
  margin-left : 10px;
`
const UserName = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

const UserStatus = styled.p`
  color: gray;
  font-size: 14px;
  margin-top: 5px;
`;

const UserTime = styled.p`
  font-size : 10px;
  align-self: start;
  justify-self: end;
  margin-top : 5px;

`
export default ChatRoom;