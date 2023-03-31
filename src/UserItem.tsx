import styled from 'styled-components';
import { User } from './Interfaces';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  display: ${({ selected }: { selected?: boolean }) =>
    selected ? 'none' : 'visible'};
`;

interface UserItemProps {
  selected: boolean;
  user: User;
  changeUser(id: number): void;
}

const UserItem = ({ selected, user, changeUser }: UserItemProps) => {
  return (
    <Wrapper onClick={() => changeUser(user.id)}>
      <Text selected={selected}>{user.name}</Text>
    </Wrapper>
  );
};

export default UserItem;
