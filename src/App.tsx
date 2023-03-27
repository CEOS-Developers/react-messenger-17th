import { RecoilRoot } from "recoil";
import ChattingRoom from "./pages/ChattingRoom";

function App() {
  return (
    <div>
      <RecoilRoot>
        <ChattingRoom />
      </RecoilRoot>
    </div>
  );
}

export default App;
