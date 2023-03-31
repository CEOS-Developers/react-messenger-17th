import styled from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import FriendList from "./pages/FriendList";
// import ChatList from "./pages/ChatList";
// import Setting from "./pages/Setting";
import ChatRoom from "./pages/ChatRoom";
import StartPage from "./pages/StartPage";

const Container = styled.div`{
  box-shadow: 1px 1px 3px 3px lightgrey;
  margin: 3rem auto 3rem;
  border-radius: 1rem;
  width: 25rem;
  height: 45rem;
;`

function App() {
  return (
    <Container>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<StartPage />} />
        {/* <Route path="/FriendsList" element={<FriendList />} /> */}
        {/* <Route path="/Chat" element={<ChatList />} /> */}
        {/* <Route path="/Setting" element={<Setting />} /> */}
        <Route path="/ChatRoom" element={<ChatRoom />} />
      </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
