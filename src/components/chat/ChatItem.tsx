import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { IChatProps, IUser } from '../../store/interface';
import { userInfo, partnerInfo } from '../../store/atom';

function ChatItem({ id, userid, message, time, user }: IChatProps): JSX.Element {
	const currentUser = useRecoilValue<IUser>(userInfo);
	const partnerUser = useRecoilValue<IUser>(partnerInfo);

	return (
		<>
			{userid === currentUser.userid ? (
				<MyMessageWrapper>
					<MySendTime>
						{time}
					</MySendTime>
					<MyMessage>
						{message}
					</MyMessage>
				</MyMessageWrapper>
			) : (
				<PartnerMessage>
					<UserImage
						src={`${process.env.PUBLIC_URL}/images/${userid}.jpg`}
						className={`${user ? 'notShow' : ''}`} />
					<MessageWrapper className={`${user ? 'notShow' : ''}`}>
						<UserName className={`${user ? 'notShow' : ''}`}>
							{partnerUser.username}
						</UserName>

						<UserInfoWrapper >
							<UserMessage className={`${user ? 'notShow' : ''}`}>
								{message}
							</UserMessage>
							<SendTime>
								{time}
							</SendTime>
						</UserInfoWrapper>
					</MessageWrapper>
				</PartnerMessage>
			)}
		</>
	)
}

export default ChatItem;
const MyMessageWrapper = styled.div`
    display : flex;
`
const MySendTime = styled.span`
    font-size : 0.3rem;
    margin-top : auto;
    margin-right : 3px;
    margin-bottom : 20px;
    text-align : right;
    flex : 1;
    white-space: nowrap;
    user-select : none;
`
const MyMessage = styled.div`
    display : flex;
    margin-left : auto;
    color: rgb(255, 255, 255);
    background-color: rgb(83, 75, 163);
    border-radius: 18px;
    padding:10px;
    margin-bottom: 10px;
    word-break : break-all;
    
`

const PartnerMessage = styled.div`
    display : flex;
`

const UserImage = styled.img`
    width : 3rem;
    height : 3rem;
    border-radius : 2rem;
    user-select : none;
    &.notShow{
        display:hidden;
        height: 0;
    }
`

const MessageWrapper = styled.div`
    margin-bottom: 20px;
    margin-left : 10px;
    display : flex;
    width : 84%;
    flex-direction : column;
`
const UserInfoWrapper = styled.div`
    display:flex;
`

const UserName = styled.span`
    font-size : 0.8rem;
    margin-bottom : 3px;
    user-select : none;
    &.notShow{
        display : none;
    }
`

const UserMessage = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    word-break : break-all;
    &.notShow{
        line-height : 1rem;
    }
`

const SendTime = styled.span`
    font-size : 0.3rem;
    margin-top : auto;
    margin-left : 3px;
    white-space: nowrap;
    user-select : none;
`