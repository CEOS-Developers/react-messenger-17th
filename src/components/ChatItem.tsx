import {useRecoilValue } from 'recoil';
import {MyMessageWrapper,MyMessage,MySendTime, PartnerMessage,UserImage,MessageWrapper,UserName,UserInfoWrapper,UserMessage,SendTime } from '../styles/style.chatitem';
import {userInfo,partnerInfo} from '../store/atom';
import {IChatProps,IUser} from '../store/interface';

function ChatItem({id,userid,message,time,user} : IChatProps) : JSX.Element {
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
            src = {`${process.env.PUBLIC_URL}/images/${userid}.jpg`} 
            className={`${user ? 'notShow' : ''}`}/>
          <MessageWrapper>
            <UserName className={`${user ? 'notShow' : ''}`}>   
              {partnerUser.username}
            </UserName>
            
            <UserInfoWrapper>
              <UserMessage>
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