import {Container, Title, ChatButton, ChatWrapper,ButtonWrapper} from '../styles/style.main';
import Chat from '../components/Chat';
import { useRecoilState } from 'recoil';
import {TbBrandHipchat} from 'react-icons/tb';
import {showDivState, hideButtonState} from '../store/atom';


function Main(): JSX.Element {
  const [showDiv, setShowDiv] = useRecoilState(showDivState);
  const [hideButton, setHideButton] = useRecoilState(hideButtonState);

  const handleButtonClick = () => {
    setShowDiv(true);
    setHideButton(true);
  };

  return (
    <>
      <Container>
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
            <Chat/>
          </ChatWrapper>
        </>
        }
      </Container>
    </>
  )
}

export default Main;