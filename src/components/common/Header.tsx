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
  height: 60px;
  display: flex;
  align-items: center;
`;
const HeaderName = styled.p`
  font-size: 1.5rem;
  margin: 2rem;
`;