import styled from "styled-components";
import Back from "../components/Bar/Back";
import MenuBar from "../components/Bar/MenuBar";
import chatData from "../jsons/chatData.json";
import userData from "../jsons/userData.json";
import {User} from "../interfaces/Interface";
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

const Content =styled.div`
background: linear-gradient(#D0F8B7, white, white, white);
display: flex;
flex-direction: column;
height: 78%;
justify-content: center;
align-items: center;
`;

function ChatRooms(){
  const chatRooms = chatData.chatRooms;
  const users = userData.users;
  const me = userData.me;
  const all = me.concat(users);

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
          <Content>
            {chatRooms.map((room) => (
              <Link to = {`/Chat/${room.roomId}`}>
                <div>
                  {getRoomMember(room.roomId, false).map((member) => (
                  <span>{member.name}</span>
            ))}
          </div>
              </Link>
            ))}
          </Content>
          <MenuBar/>
        </Wrapper>
    );
}

export default ChatRooms;
