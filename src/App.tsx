import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import {RecoilRoot} from 'recoil';

import Main from './page/Main';
import List from './page/List';
import Room from './page/Room';
import Setting from './page/Setting';
import ActingRoom from './page/ActingRoom';


const Container = styled.div`
  background-color: black;
`

function App() {
  return (
    <Container>
      <RecoilRoot>
        <Routes>          
          <Route path="/" element={<Main/>}/>
          <Route path="/chatList" element={<List/>}/>
          <Route path="/chatRoom" element={<Room/>}/>          
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/chatRoom/:roomId" element={<ActingRoom/>}/>
        </Routes>
      </RecoilRoot>
    </Container>
  );
}

export default App;
