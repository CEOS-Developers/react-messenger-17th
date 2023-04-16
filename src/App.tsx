import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Intro from "./pages/Intro";
import FriendsPage from "./pages/FriendsPage";
import ChattingsPage from "./pages/ChattingsPage";
import ChattingRoom from "./pages/ChattingRoom";
import SettingPage from "./pages/SettingPage";
// import createGlobalStyle from "styled-components";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/friends" element={<FriendsPage />}></Route>
          <Route path="/chattings/" element={<ChattingsPage />}></Route>
          <Route
            path="/chattings/chatting/:chattingId"
            element={<ChattingRoom />}
          ></Route>
          <Route path="/setting" element={<SettingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
