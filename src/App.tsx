import MainPage from './pages/MainPage';
import ChatRoom from './pages/ChatRoom';
import ChatRooms from './pages/ChatRooms';
import ListPage from './pages/ListPage';
import Setting from './pages/Setting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path='/Chat' Component={ChatRooms} />
        <Route path='/Chat/:id' Component={ChatRoom} />
        <Route path='/List' Component={ListPage} />
        <Route path='/Setting' Component={Setting}/>
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
 