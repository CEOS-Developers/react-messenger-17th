import styled from "styled-components";

interface IHeaderName{
    name : string
}

function Header({name} : IHeaderName){
  return (
    <Wrapper>
      <HeaderName>{name}</HeaderName>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction : column;
`;
const HeaderName = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`;