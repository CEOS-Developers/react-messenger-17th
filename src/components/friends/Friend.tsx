import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import {useRecoilState} from 'recoil';
import { IFriendItem, IUser} from '../../store/interface';
import {userInfo,partnerInfo,roomInfo} from '../../store/atom';

function Friend({userid, status, username} : IFriendItem){
  const [currentUser, setCurrentUser] = useRecoilState<IUser>(userInfo);
  const [partnerUser, setPartnerUser] = useRecoilState<IUser>(partnerInfo);
  const [roomId, setRoomId] = useRecoilState<Number>(roomInfo);
  const navigate = useNavigate();
  const handleDoubleClick = () => {
    setCurrentUser({userid : 0, username : '성준'});
    setPartnerUser({userid : userid,username : username});
    setRoomId(userid);
    navigate(`/chat/${userid}`);
  }
  return (
    <Wrapper onDoubleClick={handleDoubleClick}>
      <UserImage src={`${process.env.PUBLIC_URL}/images/${userid}.jpg`} />
      <UserInfoWrapper>
        <UserName>{username}</UserName>
        <UserStatus>{status}</UserStatus>
      </UserInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  padding: 5px;
  &:hover{
    background-color : rgba(230,230,230,0.9);
  }
`;

const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  user-select : none;
`;

const UserInfoWrapper = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  margin-left : 10px;
`
const UserName = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const UserStatus = styled.div`
  color: gray;
  font-size: 14px;
  margin-top: 5px;
`;
export default Friend;