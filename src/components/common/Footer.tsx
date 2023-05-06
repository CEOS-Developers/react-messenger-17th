import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsChat} from 'react-icons/bs';
import {AiOutlineSetting,AiOutlineUser} from 'react-icons/ai';

interface IFooterName{
    name : string
}

function Footer({name} : IFooterName){
  return (
    <Wrapper>
      <SelectLink to = "/" selected = {name === "사람"}>
        <AiOutlineUser size = "20"/>
      </SelectLink>
      <SelectLink to = "/chat" selected = {name === "채팅"}>
        <BsChat size = "20"/>
      </SelectLink>
      <SelectLink to = "/setting" selected = {name === "설정"}>
        <AiOutlineSetting size = "20" />
      </SelectLink>
    </Wrapper>
  );
};

export default Footer;
interface ISelected { 
  selected : boolean;
}
const Wrapper = styled.div`
  height : 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 0.1rem solid black;
`;
const SelectLink = styled(Link)<ISelected>`
  display: flex;
  justify-content: center;
  margin: 1rem;
  color: ${props => (props.selected ? "rgb(83, 75, 163)" : "#000000")};
  cursor: pointer;
`;
