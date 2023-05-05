import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai';
import { useEffect, useState } from "react";
function Search({filtering} : any){
  const [ searchInput, setSearchInput ] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  useEffect(() => {
    filtering(searchInput);
  }, [searchInput]);
  return (
    <Wrapper>
      <GlassImg><AiOutlineSearch size = "15"/></GlassImg>
      <SearchInput
        value={searchInput}
        placeholder=""
        onChange={handleInputChange}
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  border-radius: 5px;
  display:flex;
  align-items : center;
  justify-content : center;
	width : 90%;
  margin-bottom : 10px;
  background-color : white;
  position : fixed;
  top : 60px;
`;

const GlassImg = styled.div`
  overflow: hidden;
  display: inline-block;
  font-size: 0;
  vertical-align: top;
  border : none;
`

const SearchInput = styled.input`
	width : 90%;
	height : 30px;
	border: none;
	outline : none;
`