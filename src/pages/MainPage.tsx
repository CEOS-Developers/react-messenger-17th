import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  background-color: #D0F8B7;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 20px;
  border-radius: 20px;
  margin: 0 auto;
`;

const Button = styled.button`
font-size: 19px; 
font-family: 'KBIZ';
color: green;
position: absolute;
top: 630px;
left: 51%;
width: 130px;
height: 50px;
box-shadow: rgba(0, 0, 0, 0.15) 0 1px 20px;
border: none;
border-radius: 10px;
cursor: pointer;
`;

function MainPage(){
    return(
        <Wrapper>
          <img className="MainImage" src="images/MainPage.png"/>
          <Button>시작하기</Button>
        </Wrapper>
    );
}

export default MainPage;