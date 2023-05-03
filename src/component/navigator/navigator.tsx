import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navigator = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Page
          src={`/images/friends.png`}
          onClick={() => navigate('/friends')}
        />
        <Page
          src={`/images/chattingRoom.png`}
          onClick={() => navigate('/chattingRoom')}
        />
        <Page
          src={`/images/setting.png`}
          onClick={() => navigate('/setting')}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #e6e6e6;
  height: 650px;
  width: 5rem;
`;
const Page = styled.img`
  height: 1.3rem;
  width: 1.3rem;
  display: flex;
  margin: 1.8rem;
  cursor: pointer;
  :hover {
    filter: opacity(25%);
  }
`;

export default Navigator;
