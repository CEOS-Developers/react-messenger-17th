import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { UserInfo } from '../../interface/interface';
import { selectedUser } from '../../atom/atom';

const ToggleUser = ({ userId, userName }: UserInfo) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedUser);

  return (
    <>
      {selectedId == userId ? (
        <User>
          <UserImage src={`/images/${userId}.jpg`} />
          <NowUser>{userName}</NowUser>
        </User>
      ) : (
        <User>
          <PartnerImage
            src={`/images/${userId}.jpg`}
            onClick={() => setSelectedId(userId)}
          />
          <CounterPart onClick={() => setSelectedId(userId)}>
            {userName}
          </CounterPart>
        </User>
      )}
    </>
  );
};
const User = styled.div`
  display: block;
  margin: 1.85rem 0 0 25%;
  :hover {
    cursor: pointer;
  }
`;
const UserImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.8rem;
`;
const PartnerImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.8rem;
  opacity: 0.5;
`;
const NowUser = styled.div`
  font-size: 10px;
  text-align: center;
`;
const CounterPart = styled.div`
  font-size: 10px;
  opacity: 0.5;
  text-align: center;
`;

export default ToggleUser;
