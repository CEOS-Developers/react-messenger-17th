import {IoChevronBackOutline, IoCloseOutline} from 'react-icons/io5';
import {Header, BackButton, UserName, CloseButton} from '../styles/style.chatheader';
import {showDivState, hideButtonState, userInfo, partnerInfo} from '../store/atom';
import message from '../data/message.json';
import {useRecoilState } from 'recoil';

function ChatHeader(): JSX.Element {
  const [showDiv, setShowDiv] = useRecoilState(showDivState);
  const [hideButton, setHideButton] = useRecoilState(hideButtonState);
  const [currentUser, setCurrentUser] = useRecoilState(userInfo);
  const [partnerUser, setPartnerUser] = useRecoilState(partnerInfo);
  
  const handleToggleClick = () => {
    const tempUser = currentUser;
    setCurrentUser(partnerUser);
    setPartnerUser(tempUser);
  };
  const handleCloseClick = () => {
    setShowDiv(false);
    setHideButton(false);
  };
  return (
  <>
    <Header>
      <BackButton><IoChevronBackOutline size = "30"/></BackButton>
      <UserName onClick = {handleToggleClick}>{partnerUser.username}</UserName>
      <CloseButton onClick={handleCloseClick}><IoCloseOutline size="30"/></CloseButton>
    </Header>

    </>
    )
}
    
export default ChatHeader;