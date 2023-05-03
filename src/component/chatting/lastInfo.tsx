import { Last } from '../../interface/interface';
import styled from 'styled-components';

const LastInfo = ({ getLastInfo }: Last) => {
  const lastMessage = getLastInfo[0];
  const lastDate = getLastInfo[1];

  const hour = Number(lastDate.substring(16, 18));
  const hourSetting = hour < 12 ? `오전 ${hour}` : `오후 ${hour - 12}`;
  const minute = Number(lastDate.substring(19, 21));

  return (
    <L>
      <Message>{lastMessage}</Message>
      <Date>{hourSetting + ':' + minute}</Date>
    </L>
  );
};
const L = styled.div`
  display: flex;
`;
const Message = styled.div`
  width: 120px;
  font-size: 0.75rem;
  padding: 0.2rem 0 0 0.1rem;
  color: #4d4d4d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 0.75rem;
  padding: 0.2rem 0 0 1rem;
  color: #4d4d4d;
  float: right;
`;

export default LastInfo;
