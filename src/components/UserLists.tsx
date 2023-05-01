import {User} from '../interfaces/Interface'
import styled from 'styled-components';

const Wrapper = styled.div`

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

const Text = styled.div`
font-size: 15.5px;
font-weight:800;
margin-bottom:5px;
`;

const SubText = styled.div`
font-size: 13px;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const List = styled.div`
display:flex;
:hover{
  background: lightgray;
  cursor: pointer;
}
`;

interface UserListsProps{
    userId: number;
    users: User[];
}

function UserLists({userId, users}: UserListsProps){
    return(
        <Wrapper>
        {users.map((user) => (
            <List>
            <Circle>
            <Image src = {user.image}></Image>
            </Circle>
            <Content>
            <Text>{user.name}</Text>
            <SubText>{user.contents}</SubText>
            </Content>
            </List>
        ))}
        </Wrapper>
    );
}

export default UserLists;