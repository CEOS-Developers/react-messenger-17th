import styled from "styled-components";
import Back from "../components/Bar/Back";
import MenuBar from "../components/Bar/MenuBar";
import chatData from "../jsons/chatData.json";
import userData from "../jsons/userData.json";
import {User, Chat} from "../interfaces/Interface";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 20px;
  background: linear-gradient(#D0F8B7, white, white, white);
  border-radius: 20px;
  margin: 0 auto;
  font-family: 'NanumL';
  user-select:none;
  }
`;

const Bar = styled.div`
display: flex;
background-color: #D0F8B7;
height: 10%;
border-radius: 20px 20px 0 0;
align-items: center;
`;

const Contents =styled.div`
background: linear-gradient(#D0F8B7, white, white, white);
display: flex;
flex-direction: column;
height: 78%;
overflow: auto;
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: lightgray;
}
`;

const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
:hover{
  background: #E2E2E2;
  cursor: pointer;
}
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: 10px;
  margin-bottom: 6px;
  margin-top: 6px;
  background-color: white;
  border: 0.01px solid gray;
`;

const Line = styled.hr`
display: flex;
justify-content: center;
border: 0.01px solid lightgrey;
width: 320px;
`;

const All = styled.div`
display: flex;
flex-direction: column;
width: 70%;
`

const Title = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const Name = styled.div`
font-size: 15.5px;
font-weight:800;
`;

const Day = styled.div`
margin-left: 5px;
font-size: 10px;
color: gray;
`;

const Text = styled.div`
margin-top: 5px;
font-size: 13px;
`;

function ChatRooms(){
  const chatRooms = chatData.chatRooms;
  const users = userData.users;
  const me = userData.me;
  const all = me.concat(users);

  const getDate = (chat: Chat[])=>{
    const month = String(new Date(chat[chat.length -1].date).getMonth()).padStart(2, '0');
    const day = String(new Date(chat[chat.length -1].date).getDay()).padStart(2, '0');

    return month + "월 " + day + "일";
  }

  const getContent = (chat: Chat[])=>{
    const content = chat[chat.length -1].text;

    return content;
  }

  const getRoomMember=(roomId: number, isCurUser: Boolean)=>{
    const roomMember: User[] = [];
    chatRooms[roomId].users.map((memberId) => roomMember.push(all[memberId]));
    if(!isCurUser){
      roomMember.shift();
    }
    return roomMember;
  }
  

    return(
        <Wrapper>
          <Bar>
          <Back/>
          <h2 style={{fontSize: '20px', fontWeight: 1000,  margin:0, marginLeft:'10px'}}>My Chats</h2>
          </Bar>
          <Contents>
            {chatRooms.map((room) => (
              <Link to = {`/Chat/${room.roomId}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <Content>
                  {getRoomMember(room.roomId, false).map((member) => (
                  <>
                  <Circle>
                  <Image src={member.image}></Image>
                  </Circle>
                  <All>
                  <Title>
                  <Name>
                  {member.name}
                  </Name>
                  <Day>
                  {getDate(room.chats)}
                  </Day>
                  </Title>
                  <Text>
                  {getContent(room.chats)}
                  </Text>
                  </All>
                  </>
            ))}
          </Content>
          <Line/>
              </Link>
            ))}
          </Contents>
          <MenuBar/>
        </Wrapper>
    );
}

export default ChatRooms;
