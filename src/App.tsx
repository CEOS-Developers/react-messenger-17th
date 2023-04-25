import MainPage from './pages/MainPage';
import ChatRoom from './pages/ChatRoom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path='/Chatting' Component={ChatRoom} />
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
