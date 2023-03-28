import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChattingRoom from "./pages/ChattingRoom";
import { RecoilRoot } from "recoil";
// import createGlobalStyle from "styled-components";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChattingRoom />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
