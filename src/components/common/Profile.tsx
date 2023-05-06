import styled from "styled-components";
import { BsFillChatDotsFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { IUser } from '../../store/interface';
import { userInfo, partnerInfo, roomInfo, showProfile } from '../../store/atom';
import user from '../../data/user.json';

function Profile() {
	const [currentUser, setCurrentUser] = useRecoilState<IUser>(userInfo);
	const [partnerUser, setPartnerUser] = useRecoilState<IUser>(partnerInfo);
	const [profileNum, setProfileNum] = useRecoilState<number>(showProfile);
	const [roomId, setRoomId] = useRecoilState<Number>(roomInfo);
	const navigate = useNavigate();

	const targetUser = user.find(item => item.userid === profileNum);
	const targetUsername = targetUser?.username ?? '익명';
	const targetStatus = targetUser?.status ?? '아무말';
	const imagePath = process.env.PUBLIC_URL + `/images/${profileNum}.jpg`;

	const handleClick = () => {
		setCurrentUser({ userid: 0, username: '성준' });
		setPartnerUser({ userid: profileNum, username: targetUsername });
		setRoomId(profileNum);
		navigate(`/chat/${profileNum}`);
	}
	const handleCloseClick = () => {
		setProfileNum(-1);
	}

	return (
		<WrapProfile>
			<Wrapper style={{
				backgroundImage: `url(${imagePath}`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
			}}>
				<CloseBtn onClick={handleCloseClick}>X</CloseBtn>
				<WrapProfileImg src={`${process.env.PUBLIC_URL}/images/${profileNum}.jpg`} />
				<WrapProfileName>{targetUsername}</WrapProfileName>
				<WrapProfileStatus>{targetStatus}</WrapProfileStatus>
			</Wrapper>
			<SelectLink onClick={handleClick}>
				<BsFillChatDotsFill size="50" />
			</SelectLink>
		</WrapProfile>
	);
};

export default Profile;
const WrapProfile = styled.div`
  top: 0;
  position: fixed;
  left: 0;
  padding:30px;
  width : 280px;
  height : 540px;
  border-radius : 1rem;
  background-color : rgb(0,0,0,0.8);
`
const Wrapper = styled.div`    
  height : 470px;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-direction : column;
  border-radius: 1rem 1rem 0 0;
`
const WrapProfileImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  user-select : none;
`
const WrapProfileName = styled.p`
  font-size : 1.5rem;
  color : black;
  background-color : rgba(255,255,255,0.6);
  width : 90px;
  height : 30px;
  text-align : center;
  border-radius : 1rem;
  user-select : none;
`
const SelectLink = styled.p`
  display: flex;
  justify-content: center;
  color : white;
  margin: 1rem;
  cursor: pointer;
`;

const CloseBtn = styled.p`
  position :fixed;
  top : 0;
  right : 0;
  font-size : 1.5rem;
  color : white;
  padding : 1rem;
  cursor : pointer;
`
const WrapProfileStatus = styled.p`
  margin-top: 10px;
  font-size : 1.2rem;
  text-align : center;
  color : black;
  width : 200px;
  padding : 10px;
  background-color : rgba(255,255,255,0.6);
  user-select : none;
  border-radius : 1rem;

`