import { GlobalStyle } from './styles/GlobalStyle';
import { Outlet, Routes, Route, BrowserRouter } from 'react-router-dom';
import FriendsListPage from './pages/FriendsListPage';
import MainPage from './pages/MainPage';
import ChattingRoomPage from './pages/ChattingRoomPage';
import ChattingPage from './pages/ChattingPage';
import SettingPage from './pages/SettingPage';
import Navigator from './component/navigator/navigator';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';

const Layout = () => {
  return (
    <Display>
      <Navigator />
      <Outlet />
    </Display>
  );
};

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="/friends" element={<FriendsListPage />} />
              <Route path="/chattingRoom" element={<ChattingRoomPage />} />
              <Route path="/setting" element={<SettingPage />} />
            </Route>
            <Route path="/chatting" element={<ChattingPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </RecoilRoot>
  );
};
const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 350px;
  box-shadow: 1px 1px 15px rgba(73, 71, 71, 0.5);
`;
const Display = styled.div`
  display: flex;
`;

export default App;
