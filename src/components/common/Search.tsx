import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai';
import { useEffect, useState } from "react";
function Search(){
  return (
    <Wrapper>
      <GlassImg><AiOutlineSearch size = "15"/></GlassImg>
      <SearchInput></SearchInput>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  border-radius: 5px;
  display:flex;
  align-items : center;
  justify-content : center;
	width : 100%;
  margin-bottom : 10px;
  background-color : white;
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