import {useRecoilState } from 'recoil';
import {MyMessage, PartnerMessage,UserImage,MessageWrapper,UserName,UserInfoWrapper,UserMessage,SendTime } from '../styles/style.chatitem';
import {userInfo,partnerInfo} from '../store/atom';
import {IChat} from '../store/interface';

function ChatItem({id,userid,message} : IChat) : JSX.Element {
  const [currentUser, setCurrentUser] = useRecoilState(userInfo);
  const [partnerUser, setPartnerUser] = useRecoilState(partnerInfo);
  const time = new Date(id);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return (
    <>
      {userid === currentUser.userid ? (
        <MyMessage>
          {message}
        </MyMessage>
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