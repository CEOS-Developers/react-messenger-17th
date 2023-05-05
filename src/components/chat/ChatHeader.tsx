import {IoChevronBackOutline} from 'react-icons/io5';
import {Header, BackButton, UserName} from '../../styles/style.chatheader';
import {userInfo, partnerInfo} from '../../store/atom';
import {useRecoilState} from 'recoil';
import {IUser} from '../../store/interface';
import {useNavigate} from "react-router-dom";

function ChatHeader(): JSX.Element {
  const [currentUser, setCurrentUser] = useRecoilState<IUser>(userInfo);
  const [partnerUser, setPartnerUser] = useRecoilState<IUser>(partnerInfo);
  const navigate = useNavigate();
  const handleToggleClick = () => {
    const tempUser : IUser = currentUser;
    setCurrentUser(partnerUser);
    setPartnerUser(tempUser);
  };
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
  <>
    <Header>
      <BackButton onClick={handleGoBack}><IoChevronBackOutline size = "30"/></BackButton>
      <UserName onClick = {handleToggleClick}>{partnerUser.username}</UserName>
    </Header>

    </>
    )
}
    
export default ChatHeader;