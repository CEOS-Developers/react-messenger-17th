import styled from 'styled-components';
import { User } from '../interfaces/Interface';
import UserItem from './UserItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
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
