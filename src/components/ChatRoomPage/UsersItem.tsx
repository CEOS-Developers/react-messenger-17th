import { User } from "../../common/interface";
import styled from "styled-components";
import { ProfileImage } from "../../common/StyledComponent";

interface UsersItemProps {
  selected: boolean;
  user: User;
  changeUser(id: number): void;
}

const UsersItem = ({ selected, user, changeUser }: UsersItemProps) => {
  return (
    <Wrapper onClick={() => changeUser(user.id)}>
      <ProfileImage selected={selected} src={user.profileImage} />
      {user.name}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default UsersItem;