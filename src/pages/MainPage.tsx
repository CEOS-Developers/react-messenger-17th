import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate('/friends')}>click to start</Button>
      <Image src={`/images/monstax.png`} />
    </Container>
  );
};

const Container = styled.div`
  height: 650px;
  background-color: #e6e6e6;
`;

const Image = styled.img`
  width: 273px;
  height: 500px;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  :hover {
    opacity: 0.5;
    transition-duration: 0.7s;
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  height: 50px;
  width: 160px;
  margin: 50px;
  font-size: 1.3rem;
  border-radius: 1.7rem;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(73, 71, 71, 0.5);
  :hover {
    background-color: #b3b3b3;
    color: #333333;
    transition-duration: 0.7s;
    transform: scale(1.2);
    transform-origin: 50% 50%;
    transition: transform 0.7s;
  }
`;

export default MainPage;
