import styled from "styled-components";
import {useState} from 'react';
import ProfileList from "../components/HomeMain/ProfileList";
import userData from "../json/userData.json";
import { User } from "../common/interface"
import Profile from "../components/FriendPage/Profile";


const FriendPage = () => {
  const [search, searching] = useState(false);

  //search 
  const [searchInput, setSearchInput] = useState('');

  const filteredUsers = userData.users.filter((user: User) => {
    return user.name.toLowerCase().includes(searchInput.toLowerCase());
  });

 
  return (
    <Wrapper>
      <Header>
        <Title>
          <span>친구</span>
          <SearchImg src={`${process.env.PUBLIC_URL}/image/search.png`} style={{cursor:'pointer'}} onClick={() => searching(!search)}/> 
        </Title>
      
        {!search ? 
        <></> :
        <SearchInput 
        type="text"
        name="person" 
        placeholder="친구 검색"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value)
        }}/>}

        {/* 검색 기능 추가하기.. */}
        <div>
        {filteredUsers.length === 0 ? (
                <p style={{fontSize:"1rem", textAlign: "center"}}>그런 친구는 없어요!</p>
              ) : (
                <Profile users={filteredUsers} />
              )}
        
        </div>
      </Header>

      <Profile users={[]}></Profile>

    </Wrapper>
     
    
  );
};
export default FriendPage;

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
  // justify-content: center;
  padding-top: 1rem;
  padding-left: 1rem;
`;

const Header = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const SearchImg = styled.img`
  transform: translate(700%);
  width: 1.5rem;
`;
const SearchInput = styled.input`
  width: 220px;
  padding: 5px;
  margin-left: 1.2rem;
  border-radius: 20px;
  border-color: #FFD7C0;
`;

const ProfileWrapper = styled.div`

`;

