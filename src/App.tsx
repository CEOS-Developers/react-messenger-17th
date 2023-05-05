
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatroomPage from "./pages/ChatroomPage";
import Chatroom from "./pages/ChatRoom";
import Start from "./pages/Start";
import FriendPage from "./pages/FriendPage";
import SettingPage from "./pages/SettingPage";
import Layout from "./components/Layout";
import GlobalStyle from './common/GlobalStyle';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Start/>}></Route>
          <Route element={<Layout/>}>
            <Route path="/FriendPage" element={<FriendPage/>}/>
            <Route path="/ChatroomPage" element={<ChatroomPage/>}/>
            <Route path="/SettingPage" element={<SettingPage/>}/>
          </Route>
          <Route path="/chatrooms/:id" element={<Chatroom />} /> 
        </Routes>
      </BrowserRouter>
      
    </>
  );
};


export default App;