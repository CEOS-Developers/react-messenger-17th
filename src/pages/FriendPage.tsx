import styled from "styled-components";
import {useState} from 'react';
import ProfileList from "../components/HomeMain/ProfileList";

const FriendPage = () => {
  const [value, setValue] = useState('');
  const [search, searching] = useState(false);

  return (
    <Main>
      <Search>
        <img src={`${process.env.PUBLIC_URL}/image/search.png`} onClick={() => searching(!search)}/> 
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

      {/* <ProfileList>
        <Profile>
          <div></div>
          여기 안에 사진 넣고.. 이름 넣고.. 상메 넣고..
        </Profile>
      </ProfileList> */}
    </Main>
     
    
  );
};
export default FriendPage;


const Main = styled.div`


`;

const Search = styled.div`
  width:40px;
  background-color:red;

`;

const SearchInput = styled.input`
width:100px;
background-color:blue;
`;

const Profile = styled.div`

`;