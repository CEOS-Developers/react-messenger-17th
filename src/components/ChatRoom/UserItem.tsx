import styled from 'styled-components';
import { User } from '../../interfaces/Interface';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const All = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 15px;
display: ${({ selected }: { selected?: boolean }) =>
selected ? 'none' : 'visible'};
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`;


interface UserItemProps {
  selected: boolean;
  user: User;
  changeUser(id: number): void;
}

const UserItem = ({ selected, user, changeUser }: UserItemProps) => {
  return (
    <Wrapper onClick={() => changeUser(user.id)}>
      <All selected={selected}>
      <Image src={user.image}></Image>
      <Text>{user.name}</Text>
      </All>
    </Wrapper>
  );
};

export default UserItem;
