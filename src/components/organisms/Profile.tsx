import styled from "styled-components";
import { userInterface } from "../../types/interfaces";

interface ProfileProps {
  nonTypingUser: userInterface;
  setTypingUser: (value: userInterface) => void;
}

const Profile = ({ nonTypingUser, setTypingUser }: ProfileProps) => {
  const toggleUser = () => {
    setTypingUser(nonTypingUser);
  };

  return (
    <Wrapper>
      <img src={nonTypingUser.profileImage} alt="profile"></img>
      <span onClick={toggleUser}>{nonTypingUser.userName}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 5rem);
  padding: 0 0.5rem;
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.8rem;
    object-fit: cover;
    // cursor: pointer;
  }

  span {
    width: calc(100% - 2.5rem);
    padding-left: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
    cursor: pointer;
  }
`;

export default Profile;
