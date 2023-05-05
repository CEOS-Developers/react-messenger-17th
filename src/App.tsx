import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu';

function App() {
  return (
    <Container>
      <LeftBox>
        <Menu />
      </LeftBox>
      <RightBox>
        <Outlet />
      </RightBox>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 26rem;
  height: 46rem;

  /*
  background: rgb(126, 246, 247);
  background: linear-gradient(
    0deg,
    rgba(126, 246, 247, 1) 0%,
    rgba(167, 80, 255, 1) 86%
  );
  */
  border-radius: 2.3rem;
  box-shadow: 0px 0px 5px #444;

  display: flex;
`;

const LeftBox = styled.div`
  flex-basis: 20%;
  background-color: #e3e0e0a8;
  border-top-left-radius: 2.3rem;
  border-bottom-left-radius: 2.3rem;
  display: flex;
  justify-content: center;
`;

const RightBox = styled.div`
  flex-basis: 80%;
`;
