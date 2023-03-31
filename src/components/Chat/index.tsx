import { ChatWrapper } from './styles';
import { IChat, IDM, IUser } from '../../typings/db';
import dayjs from 'dayjs';
import gravatar from 'gravatar';
import React, { FC, useMemo, memo } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import regexifyString from 'regexify-string';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atom';

interface Props {
  data: IDM | IChat;
}

const Chat: FC<Props> = memo(({ data }) => {
  const { workspace } = useParams<{ workspace: string; channel: string }>();
  const user: IUser = 'Sender' in data ? data.Sender : data.User;
  const [myData, setMyData] = useRecoilState<IUser>(userState);
  const result = useMemo<(string | JSX.Element)[] | JSX.Element>(
    () =>
      data.content.startsWith('uploads\\') || data.content.startsWith('uploads/') ? (
        <img src={gravatar.url('test', { s: '24px', d: 'retro' })} style={{ maxHeight: 200 }} />
      ) : (
        regexifyString({
          //TODO 언급 기능 구현완료하기
          pattern: /@\[(.+?)]\((\d+?)\)|\n/g,
          decorator(match, index) {
            const arr: string[] | null = match.match(/@\[(.+?)]\((\d+?)\)/)!;
            if (arr) {
              return (
                <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
                  @{arr[1]}
                </Link>
              );
            }
            return <br key={index} />;
          },
          input: data.content,
        })
      ),
    [workspace, data.content],
  );

  return (
    <ChatWrapper>
      {user.id === myData.id && <div style={{ width: '80%' }} />}

      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{result}</p>
      </div>
    </ChatWrapper>
  );
});

export default Chat;
