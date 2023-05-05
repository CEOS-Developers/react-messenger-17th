import styled from "styled-components";
import Search from '../common/Search';

interface IHeaderName{
    name : string
}

function Header({name} : IHeaderName){
  return (
    <Wrapper>
      <HeaderName>{name}</HeaderName>
      <Search/>
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