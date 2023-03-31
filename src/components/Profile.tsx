import styled from "styled-components";
import { userInterface } from "../json/interface";

interface ProfileProps {
  currentUsers: userInterface[];
  typingUser: userInterface;
  setTypingUser: (value: userInterface) => void;
}

const Profile = ({ currentUsers, typingUser, setTypingUser }: ProfileProps) => {
  const theOther = currentUsers.filter(
    (user) => user.userId !== typingUser.userId
  )[0];

  const toggleUser = () => {
    setTypingUser(theOther);
  };

  return (
    <Wrapper>
      <img src={theOther.profileImage} alt="profile"></img>
      <span onClick={toggleUser}>{theOther.userName}</span>
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
    cursor: pointer;
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
