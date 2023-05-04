import { Link } from "react-router-dom";
import chatData from "../json/chatRoom.json";
import { getRoomMembers } from "../common/Custom";
import styled from "styled-components";
import { useState } from "react";
import LatestMsg from "../components/ChatRoomPage/LatestMsg";

const ChatroomPage = () => {

  //sort to the oldest
  const [sort, setSort] = useState(false);
  const chatrooms = sort ? chatData.rooms : [...chatData.rooms].reverse();
  const handleSort = () => {
      setSort(!sort);
  };

  return (
    <Wrapper>
      <Header>
        <Title>
          <span>채팅</span>
        </Title>
        <div style={{display: "flex", flexDirection: "row", gap: "4px", paddingTop: "1rem", paddingLeft: "1rem"}}> 
            <h3>오래된 순</h3>
            <ToggleWrapper>
              <CheckBox
                  type="checkbox"
                  onChange={handleSort}
              />
              <LeftSide isChecked={sort}></LeftSide>
              <RightSide isChecked={!sort}></RightSide>
            </ToggleWrapper>
        </div>
      </Header>

      <Body> 
            {chatrooms.map(room => (
              <Link to={`/chatrooms/${room.roomId}`} style={{ textDecoration: "none", color: "black" }}>
                <div>
                  {getRoomMembers(room.roomId, false).map((member) => (
                  <ChatBox>
                    <ProfileImg><img src={`${member.profileImage}`}></img></ProfileImg>
                    <div>
                      <LatestMsg userName={member.name} chatMessage={room.chats[1].text} timestamp={room.chats[1].date}/>
                    </div>
                  </ChatBox>
                ))}
                </div>
              </Link> 
            ))}
        
      </Body>
    </Wrapper>
  );
};

export default ChatroomPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-left: 1rem;
`;

const Header = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 5rem;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  height: 5rem;
  :hover {
    background-color: #ffecd8;
  }
`;

const ProfileImg = styled.div`
  width: 3rem;
  object-fill: cover;
  margin-left: 0.8rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

const ToggleWrapper = styled.div`
    border-radius: 2em;
    width: 60px;
    height: 30px;
    position: relative;
    background-color: #EEEBEB;
`
const LeftSide = styled.div<{ isChecked: boolean }>`
    cursor: pointer;
    position: relative; 
`
const RightSide = styled.div<{ isChecked: boolean }>`
    cursor: pointer;
    position: relative;
`
const CheckBox = styled.input`
    // display: none;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    position: absolute;
    border-radius: 50%;
    left: 5px;
    top: 4px;
    transition: all 0.2s ease-in-out;
    :checked{
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: 28px;
      transition: all 0.2s ease-in-out;
    }
    `;