import {Container, Title, ChatButton, ChatWrapper,ButtonWrapper} from '../styles/style.main';
import { atom, useRecoilState } from 'recoil';
import {TbBrandHipchat} from 'react-icons/tb';

const showDivState = atom<boolean>({
  key: 'showDivState',
  default: false,
});

const hideButtonState = atom<boolean>({
  key: 'hideButtonState',
  default: false,
});

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
            <Title>무엇을 도와드릴까요?</Title>
            <ChatButton onClick={handleButtonClick}>
              <TbBrandHipchat size = "40"/>
            </ChatButton>
          </>
          }
        </ButtonWrapper>
        {showDiv &&
        <>
          <ChatWrapper className={`${showDiv ? 'show' : ''}`}></ChatWrapper>
        </>
        }
      </Container>
    </>
  )
}

export default Main;