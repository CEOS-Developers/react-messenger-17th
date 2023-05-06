import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { IUser } from '../../store/interface';
import { userInfo, partnerInfo, roomInfo, showProfile } from '../../store/atom';

interface IRoomInfo {
	roomid: number;
	userid: number;
	username: string;
	messages: string;
	time: number;
	active: boolean;
	onClick: () => void;
}

function ChatRoom({ roomid, userid, username, messages, time, active, onClick }: IRoomInfo): JSX.Element {
	const [currentUser, setCurrentUser] = useRecoilState<IUser>(userInfo);
	const [partnerUser, setPartnerUser] = useRecoilState<IUser>(partnerInfo);
	const [roomId, setRoomId] = useRecoilState<Number>(roomInfo);
	const [profileNum, setProfileNum] = useRecoilState<number>(showProfile);
	const navigate = useNavigate();

	const makeTime = (time: number) => {
		const newTime = new Date(time);
		const nowTime = new Date();
		let nowMonth = nowTime.getMonth() + 1;
		let nowDate = nowTime.getDate();
		let month = newTime.getMonth() + 1;
		let date = newTime.getDate();
		let hours = newTime.getHours();
		let minutes = newTime.getMinutes();
		let madeTime = '';
		if (nowMonth === month && nowDate === date) {
			let hourFormat = hours < 12 ? `오전 ${hours}` : `오후 ${hours - 12}`;
			let minFormat = minutes < 10 ? `0${minutes}` : minutes.toString();
			madeTime = hourFormat + ":" + minFormat;
		}
		else {
			madeTime = `${month}월 ${date}일`;
		}
		return madeTime;
	}

	const handleDoubleClick = () => {
		setCurrentUser({ userid: 0, username: '성준' });
		setPartnerUser({ userid: userid, username: username });
		setRoomId(userid);
		navigate(`/chat/${roomid}`);
	}

	const handleClickImg = () => {
		setProfileNum(userid);
	}

	return (
		<Wrapper active={active} onClick={onClick} onDoubleClick={handleDoubleClick}>
			<UserImage src={`${process.env.PUBLIC_URL}/images/${userid}.jpg`} onClick={handleClickImg} />
			<UserInfoWrapper>
				<UserName>{username}</UserName>
				<UserTime>{makeTime(time)}</UserTime>
				<UserStatus>{messages}</UserStatus>
			</UserInfoWrapper>
		</Wrapper>
	);
};
const Wrapper = styled.div<{ active: boolean }>`
  display: flex;
  height: 50px;
  padding: 5px;
  background-color: ${props => (props.active ? 'rgba(221,221,226,0.9)' : 'rgba(247, 247, 248, 0.9)')};
  &:hover{
    background-color : rgba(230,230,230,0.9);
  }
`;

const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  user-select : none;
  cursor : pointer;
`;

const UserInfoWrapper = styled.div`
  width : 80%;
  display : grid;
  grid-template-columns: 4fr 1fr; 
  grid-template-rows: 1fr 1fr;
  margin-left : 10px;
`
const UserName = styled.p`
  font-size: 17px;
  font-weight: 500;
  user-select : none;
`;

const UserStatus = styled.p`
  color: gray;
  font-size: 14px;
  margin-top: 5px;
  user-select : none;
`;

const UserTime = styled.p`
  font-size : 10px;
  align-self: start;
  justify-self: end;
  margin-top : 5px;
  user-select : none;

`
export default ChatRoom;