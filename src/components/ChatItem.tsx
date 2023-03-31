import {useRecoilState,useRecoilValue } from 'recoil';
import {MyMessageWrapper,MyMessage,MySendTime, PartnerMessage,UserImage,MessageWrapper,UserName,UserInfoWrapper,UserMessage,SendTime } from '../styles/style.chatitem';
import {userInfo,partnerInfo} from '../store/atom';
import {IChat} from '../store/interface';

function ChatItem({id,userid,message} : IChat) : JSX.Element {
  const currentUser = useRecoilValue(userInfo);
  const partnerUser = useRecoilValue(partnerInfo);
  const time = new Date(id);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return (
    <>
      {userid === currentUser.userid ? (
        <MyMessageWrapper>
          <MySendTime>
            {hours}:{minutes}
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
                {hours}:{minutes}
              </SendTime>
            </UserInfoWrapper>
          </MessageWrapper>
        </PartnerMessage>
      )}
    </>
  )
}

export default ChatItem;