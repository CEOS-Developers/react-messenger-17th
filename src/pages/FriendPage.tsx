import styled from "styled-components";
import {useState} from 'react';
import ProfileList from "../components/HomeMain/ProfileList";

const FriendPage = () => {
  const [value, setValue] = useState('');
  const [search, searching] = useState(false);

  return (
    <main>
      <Search>
        <SearchImg src={`${process.env.PUBLIC_URL}/image/search.png`} onClick={() => searching(!search)}/> 
        {!search ? 
        <></> :
        <SearchInput 
        type="text"
        name="person" 
        placeholder="어떤 친구를 찾고 싶나요?"
        onChange={(e) => {
          console.log(e.target,value)
          setValue(e.target.value)
        }}/>}
      </Search>

      <ProfileWrapper>
        <Profile>
          <div>
          </div>
        </Profile>
      </ProfileWrapper>
    </main>
     
    
  );
};
export default FriendPage;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
`;

const SearchImg = styled.img`
  transform: translate(380%, 50%);
  width: 10%;
`;
const SearchInput = styled.input`
  width: 220px;
  padding: 5px;
  border-radius: 20px;
  border-color: #FFD7C0;
`;

const ProfileWrapper = styled.div`

`;

const Profile = styled.div`

`;
