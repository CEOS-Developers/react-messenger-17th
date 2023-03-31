import {ChatHeader, BackButton, UserName, CloseButton} from '../styles/style.chat';
import {atom, useRecoilState } from 'recoil';
import {IoChevronBackOutline, IoCloseOutline} from 'react-icons/io5';

function Main(): JSX.Element {
//   const [showDiv, setShowDiv] = useRecoilState(showDivState);

  const handleCloseClick = () => {
    // setShowDiv({ showDiv: false });
  };
  return (
    <>
      <ChatHeader>
        <BackButton><IoChevronBackOutline size = "30"/></BackButton>
        <UserName>상담원1</UserName>
        <CloseButton onClick={handleCloseClick}><IoCloseOutline size="30"/></CloseButton>
      </ChatHeader>

    </>
  )
}

export default Main;