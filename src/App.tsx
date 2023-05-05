import GlobalStyle from './styles/GlobalStyle';
import {Container, Title, ChatButton, ChatWrapper,ButtonWrapper} from './styles/style.main';
import Chat from './components/chat/Chat';
import { useRecoilState } from 'recoil';
import {TbBrandHipchat} from 'react-icons/tb';
import {showDivState, hideButtonState} from './store/atom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Members from './views/Members';
import Setting from './views/Setting';
import ChatList from './views/ChatList';
import {isSearch} from './store/atom';
import { useEffect } from 'react';

function App(): JSX.Element {
  const [showDiv, setShowDiv] = useRecoilState(showDivState);
  const [hideButton, setHideButton] = useRecoilState(hideButtonState);
  const [isSearchVisible, setIsSearchVisible] = useRecoilState(isSearch);
  const handleContextMenuClick = (e : any) => {
    e.preventDefault();
  }
  const handleButtonClick = () => {
    setShowDiv(true);
    setHideButton(true);
  };
  useEffect(() => {
    const handleKeyDown = (event: { ctrlKey: any; metaKey: any; key: string; preventDefault: () => void; }) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
        event?.preventDefault();
        setIsSearchVisible(true);
      }
      else if ((event?.key === 'Escape')){
        setIsSearchVisible(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <>
      <GlobalStyle/>
      <Container onContextMenu = {handleContextMenuClick}>
        <ButtonWrapper>
          {!hideButton &&
          <>
            <Title>배성준의 고민상담소</Title>
            <ChatButton onClick={handleButtonClick}>
              <TbBrandHipchat size = "40"/>
            </ChatButton>
          </>
          }
        </ButtonWrapper>
        {showDiv &&
        <>
        <ChatWrapper className={`${showDiv ? 'show' : ''}`}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Members />} />
              <Route path="/chat" element={<ChatList/>} />
              <Route path="/chat/:roomid" element={<Chat />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </BrowserRouter>
        </ChatWrapper>
        </>
        }
      </Container>
    </>
  )
}

export default App;