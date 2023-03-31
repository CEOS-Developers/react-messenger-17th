import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import ChatRoomPage from './components/ChatRoomPage/ChatRoomPage';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Container>
        <ChatRoomPage />
      </Container>
    </RecoilRoot>
  );
}

export default App;

const Container = styled.div`
  width: 26rem;
  height: 52rem;

  background-color: aquamarine;
  border-radius: 2.3rem;
  box-shadow: 0px 0px 5px #444;

  display: flex;
  flex-direction: column;
`;
