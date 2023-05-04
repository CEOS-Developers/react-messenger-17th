import { Link } from "react-router-dom";
import userData from "../json/userData.json";
import chatData from "../json/chatRoom.json";
import { User, Chat } from "../common/interface"
import { getRoomMembers } from "../common/Custom";
import { ProfileImage } from "../common/StyledComponent";
import styled from "styled-components";
import { useState } from "react";

const ChatroomPage = () => {

  //sort to the oldest
  const [sort, setSort] = useState(false);
  const chatrooms = sort ? [...chatData.rooms].reverse() : chatData.rooms;
  const handleSort = () => {
      setSort(!sort);
  };

  return (
    <Wrapper>
      <Header>
        <Title>
          <span>채팅</span>
          <div> 
            <span>오래된 순</span>
            <SortBox type="checkbox" onChange={handleSort} checked={sort}></SortBox>
          </div>
        </Title>
      </Header>

      <Body> 
            {chatrooms.map(room => (
              <Link to={`/chatrooms/${room.roomId}`}>
                <div>
                  {getRoomMembers(room.roomId, false).map((member) => (
                  <div>
                  <ProfileImage src={`${member.profileImage}`} />
                  <ChatInfo>
                    <h3> {member.name} </h3>
                  </ChatInfo>
                  </div>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-left: 1rem;
`;

const Header = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  height: 5rem;
  gap: 15px;
`;

const SortBox = styled.input`

`;

const ProfileImg = styled.div`
  width: 3rem;
  object-fill: cover;
  margin-left: 0.8rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    border: 2px solid #D9D9D9;
    cursor: pointer;
  }
`;

const ChatInfo = styled.div`

`;

const RecentChat = styled.div`

`;