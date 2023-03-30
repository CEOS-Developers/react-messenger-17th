import { RecoilRoot } from 'recoil';
//import { IChat } from './interface/interface';
//import chatData from './db/chatData.json';
import ChatRoomPage from './components/ChatRoomPage/ChatRoomPage';

function App() {
  //const [chats, setChats] = useState<IChat[]>(chatData);

  return (
    <RecoilRoot>
      <div>
        <ChatRoomPage />
      </div>
    </RecoilRoot>
  );
}

export default App;
