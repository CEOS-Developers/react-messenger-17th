import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SettingPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Setting>더보기</Setting>

      <Line />

      <div className="user">{'사용자'}</div>
      <User>
        <MyImage src={`/images/0.jpg`} />
        <MyName>{'아깽'}</MyName>
      </User>

      <Line />

      <div className="user">{'사용자 정보'}</div>
      <User onClick={() => window.open('https://github.com/oyatplum')}>
        <Git src={`/images/git.png`} />
        <Info>{'Github_link'}</Info>
      </User>

      <User onClick={() => window.open('https://oyatplum.tistory.com/')}>
        <Git src={`/images/tistory.png`} />
        <Info>{'Tistory_link'}</Info>
      </User>

      <User onClick={() => window.open('https://www.instagram.com/oyat_plum/')}>
        <Git src={`/images/insta.png`} />
        <Info>{'Instagram_link'}</Info>
      </User>

      <Line />

      <div className="user">{'로그아웃'}</div>
      <User onClick={() => navigate('/')}>
        <Git src={`/images/logout.png`} />
        <Info>{'Logout'}</Info>
      </User>
    </Container>
  );
};

const Setting = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0 1rem 1rem;
`;
const Container = styled.div`
  width: 260px;

  .user {
    margin: 1rem 0 0.2rem 1.3rem;
    font-size: 0.78rem;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  :hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;
const MyImage = styled.img`
  margin: 0 0 0.5rem 1rem;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 1.2rem;
`;
const MyName = styled.div`
  font-size: 1rem;
  display: block;
  margin: 1.5rem 0 0 0.5rem;
  height: 3rem;
  font-size: 1rem;
`;
const Line = styled.div`
  border-top: 1px solid #cccccc;
  margin: 0.2rem 1rem 0 1rem;

  div {
    font-size: 0.7rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
`;
const Git = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  margin: 0.5rem 0 0.5rem 1.2rem;
`;
const Info = styled.div`
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;
export default SettingPage;
