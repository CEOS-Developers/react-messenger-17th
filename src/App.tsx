import GlobalStyle from './styles/GlobalStyle';
import Chat from './components/chat/Chat';
import { useRecoilState } from 'recoil';
import {TbBrandHipchat} from 'react-icons/tb';
import {showDivState, hideButtonState} from './store/atom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
import Members from './views/Members';
import Setting from './views/Setting';
import ChatList from './views/ChatList';
import {isSearch} from './store/atom';

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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
      event.preventDefault();
      setIsSearchVisible(true);
    }
    else if ((event.key === 'Escape')){
      setIsSearchVisible(false);
    }
  };
  return (
    <>
      <GlobalStyle/>
      <Container onContextMenu = {handleContextMenuClick} onKeyDown={handleKeyDown}>
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
        <ChatWrapper className={`${showDiv ? 'show' : ''}`} onKeyDown={handleKeyDown}>
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
function blinkingEffect() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
}

function fadeIn(){
    return keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
    `;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Title = styled.p`
    font-size : 4vh;
    margin-bottom : 15px;
    animation: ${blinkingEffect} 1s step-end infinite;
    user-select : none;
    text-align : center;
    
`

const ChatButton = styled.button`
    width : 60px;
    height: 60px;
    cursor : pointer;
    backdrop-filter: blur(30px);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 26px;
    box-shadow : 3px 3px 3px black;
    &:active{
        box-shadow : none;
    }
`

const ChatWrapper = styled.div`
    width: 340px;
    height: 600px;
    opacity: 0;
    display:flex;
    animation: fadeIn 0.5s ease-out;
    flex-direction : column;
    box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.3) 0px 12px 60px;
    background-color: rgba(247, 247, 248, 0.9);
    transition: opacity 0.5s ease-in-out;
    backdrop-filter: blur(60px);
    border-radius : 25px;
    &.show{
        animation: ${fadeIn} 1s ease-out;
        opacity : 1;
    }
`