import {useEffect, useState} from 'react';
import styled from "styled-components";
import MenuBar from "../components/Bar/MenuBar";
import Back from "../components/Bar/Back";
import userData from '../jsons/userData.json';
import UserLists from "../components/ListPage/UserLists";
import {GoSearch} from "react-icons/go"

const Modal = styled.div`
width: 100%;
height: 100%;
`;

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

const Content = styled.div`
background: linear-gradient(#D0F8B7, white, white, white);
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

const SubTitle = styled.div`
display: flex;
margin: 20px;
margin-bottom: 0;
font-size: 19px;
font-weight: 1000;
`;

const Line = styled.hr`
display: flex;
justify-content: center;
border: 0.01px solid lightgrey;
width: 320px;
`;

const searchStyle = {
  color: 'white',
  filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.3))',
  fontSize: '22px',
  cursor: 'pointer',
  marginLeft: '55%'
}

function ListPage(){
  const users = userData.users;
  const me = userData.me;
  const [userId, setUserId] = useState<number>(0);

    return(
      <Modal>
        <Wrapper>
          <Bar>
          <Back/>
          <h2 style={{fontSize: '20px', fontWeight: 1000,  margin:0, marginLeft:'10px'}}>Profiles</h2>
          <GoSearch style={searchStyle}/>
          </Bar>
          <Content>
          <SubTitle>me</SubTitle>
          <Line/>
          <UserLists userId={userId} users={me}/>
          <SubTitle>friends</SubTitle>
          <Line/>
          <UserLists userId={userId} users={users}/>
          </Content>
          <MenuBar/>
        </Wrapper>
      </Modal>
    );
}

export default ListPage;