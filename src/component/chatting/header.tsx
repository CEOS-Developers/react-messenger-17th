import styled from 'styled-components';
import ToggleUser from './toggleUser';
import userList from './../../json/users.json';
import { ChattingRoom } from './../../interface/interface';
import { useNavigate } from 'react-router-dom';

const Header = ({ chattingRoomId }: ChattingRoom) => {
  const navigate = useNavigate();

  return (
    <Head>
      <ToggleUser
        userId={userList[0].userId}
        userName={userList[0].userName}
        userMessage={userList[0].userMessage}
      />
      {
        <ToggleUser
          userId={userList[chattingRoomId].userId}
          userName={userList[chattingRoomId].userName}
          userMessage={userList[chattingRoomId].userMessage}
        />
      }
      <Button onClick={() => navigate('/chattingRoom')}>X</Button>
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  background-color: rgb(191 214 232);
  padding-bottom: 3px;
`;
const Button = styled.button`
  border: none;
  background: none;
  font-size: 0.9rem;
  margin: 0 0 2.5rem 3.8rem;
  color: #9a9a9a;

  :hover {
    color: rgb(69 68 68);
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default Header;
