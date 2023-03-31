import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ChattingRoom from "./pages/ChattingRoom";
import Splash from "./pages/Splash";
// import createGlobalStyle from "styled-components";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route
            path="/chattings/:chattingId"
            element={<ChattingRoom />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
