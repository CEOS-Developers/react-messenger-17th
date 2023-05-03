import styled from "styled-components";
import {useState} from 'react';
import ProfileList from "../components/HomeMain/ProfileList";
import userData from "../json/userData.json";
import { User } from "../common/interface"
import Profile from "../components/FriendPage/Profile";


const FriendPage = () => {
  const [value, setValue] = useState('');
  const [search, searching] = useState(false);

  return (
    <Wrapper>
      <Search>
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
        onChange={(e) => {
          console.log(e.target,value)
          setValue(e.target.value)
        }}/>}
      </Search>

      <Profile></Profile>

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

const Search = styled.div`
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

