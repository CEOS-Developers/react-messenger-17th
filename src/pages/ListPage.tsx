import styled from "styled-components";
import MenuBar from "../components/MenuBar";
import Back from "../components/Back";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  background: linear-gradient(#D0F8B7, white, white, #D0F8B7);
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 20px;
  border-radius: 20px;
  margin: 0 auto;
  font-family: 'KBIZ';
`;

const Bar = styled.div`
display: flex;
margin: 23px;
`;

const subTitle = styled.text`

`;

function ListPage(){
    return(
        <Wrapper>
          <Bar>
          <Back/>
          <h3 style={{margin:0, marginLeft:'15px'}}>Profiles</h3>
          </Bar>
          <MenuBar/>
        </Wrapper>
    );
}

export default ListPage;