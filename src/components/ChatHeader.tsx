import {IoChevronBackOutline, IoCloseOutline} from 'react-icons/io5';
import {Header, BackButton, UserName, CloseButton} from '../styles/style.chatheader';
import {showDivState, hideButtonState, userInfo, partnerInfo} from '../store/atom';
import {useRecoilState ,useSetRecoilState} from 'recoil';
import {IUser} from '../store/interface';

function ChatHeader(): JSX.Element {
  const setShowDiv = useSetRecoilState<boolean>(showDivState);
  const setHideButton = useSetRecoilState<boolean>(hideButtonState);
  const [currentUser, setCurrentUser] = useRecoilState<IUser>(userInfo);
  const [partnerUser, setPartnerUser] = useRecoilState<IUser>(partnerInfo);
  
  const handleToggleClick = () => {
    const tempUser : IUser = currentUser;
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
      <CloseButton onClick = {handleCloseClick}><IoCloseOutline size="30"/></CloseButton>
    </Header>

    </>
    )
}
    
export default ChatHeader;