import { useState } from "react";
import styled from "styled-components";
import Dropdown from './Dropdown';
interface IHeaderName{
    name : string
}

function Header({name} : IHeaderName){
  const [view, setView] = useState(false); 
  return (
    <Wrapper>
      {name === "상담목록" ? (
        <WrapWithDrop>
          <HeaderName>{name}</HeaderName>
          <ul onClick={() => {setView(!view)}}>
            {" "}
          {view ? '⌃' : '⌄'}
          {view && <Dropdown />}
          </ul>
        </WrapWithDrop>
      ) : (
        <HeaderName>{name}</HeaderName>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction : column;
  user-select : none;
`;
const HeaderName = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`;

const WrapWithDrop = styled.div`
  display : flex;
  
`