import { useNavigate } from "react-router";
import styled from "styled-components";


const Start = () => {
  const navigate = useNavigate();

  const goFriendPage = () => {
    console.log("dsfljdf");
    navigate('/FriendPage');
  }

  return (
    <MainPageContainer>
      <MainPageImage
      src={`${process.env.PUBLIC_URL}/image/start3.png`}
      alt='React'
      />
      {/* button안에 폰트 바꾸기 */}
      <Button onClick={goFriendPage} style={{fontFamily: 'GmartketSansMedium'}}> 
        Start!
      </Button>
    </MainPageContainer>
  );
};


const MainPageContainer = styled.div`
  width: 350px;
  height: 43rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(29, 18, 97);
  margin-top: 10px;
`;

const MainPageImage = styled.img`
  width: 100%;
  opacity: 100%;
  border-radius: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 1.2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  background-color: rgb(29, 18, 97);
`;



export default Start;
