import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import styled from 'styled-components';

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
