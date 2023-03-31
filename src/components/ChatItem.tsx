import {useRecoilValue } from 'recoil';
import {MyMessageWrapper,MyMessage,MySendTime, PartnerMessage,UserImage,MessageWrapper,UserName,UserInfoWrapper,UserMessage,SendTime } from '../styles/style.chatitem';
import {userInfo,partnerInfo} from '../store/atom';
import {IChatProps} from '../store/interface';

function ChatItem({id,userid,message,time} : IChatProps) : JSX.Element {
  const currentUser = useRecoilValue(userInfo);
  const partnerUser = useRecoilValue(partnerInfo);
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
          <UserImage src = {`${process.env.PUBLIC_URL}/images/${userid}.jpg`} />
          <MessageWrapper>
            <UserName>
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