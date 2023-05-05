import styled from 'styled-components';
import { User } from '../../interfaces/Interface';
import UserItem from './UserItem';
import Back from '../Bar/Back';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px;
  background-color: white;
  border-radius: 20px 20px 0 0;
  height: 10%;
  box-sizing: border-box;
`;

interface UserListProps {
  userId: number;
  users: User[];
  changeUser(id: number): void;
}

function UserList({ userId, users, changeUser }: UserListProps){
  return (
    <Wrapper>
      <Back/>
      {users.map((user) => (
        <UserItem
          key={user.id}
          selected={user.id === userId}
          user={user}
          changeUser={changeUser}
        />
      ))}
    </Wrapper>
  );
};

export default UserList;
