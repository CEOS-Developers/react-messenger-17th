
import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";

import ChatroomPage from "./pages/ChatroomPage";
import Chatroom from "./pages/Chatroom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        {/* <Route element={<Layout />}> */}
          {/* <Route path="/" element={<FriendPage />} /> */}
          <Route path="/chatrooms" element={<ChatroomPage />} />
          {/* <Route path="/setting" element={<SettingPage />} /> */}
        {/* </Route> */}
        <Route path="/chatrooms/:id" element={<Chatroom />} />
      </Routes>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
html{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  font-size: 0.8rem;
}
`;

export default App;