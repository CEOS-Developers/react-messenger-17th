import styled from "styled-components";
import { User } from "../../common/interface";
import UsersItem from "./UsersItem";

interface UsersListProps {
  curUser: number;
  users: User[];
  changeUser(id: number): void;
}

const UsersList = ({ curUser, users, changeUser }: UsersListProps) => {
  return (
    <Wrapper>
      {users.map((user) => (
        <UsersItem
          key={user.id}
          selected={user.id === curUser}
          user={user}
          changeUser={changeUser}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  // background-color: lightblue;
  height: 15%;
  box-sizing: border-box;
  border-radius: 1rem 1rem 0rem 0rem;
`;

export default UsersList;