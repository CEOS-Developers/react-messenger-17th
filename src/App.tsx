
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatroomPage from "./pages/ChatroomPage";
import Chatroom from "./pages/ChatRoom";
import Start from "./pages/Start";
import FriendPage from "./pages/FriendPage";
import SettingPage from "./pages/SettingPage";
import Layout from "./components/Layout";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
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

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body{
  font-family: 'GmartketSansMedium';
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  font-size: 0.8rem;
}
`;

export default App;