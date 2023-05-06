import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchInput } from '../../store/atom';
function Search({ filtering }: any) {
	const [input, setInput] = useRecoilState<string>(searchInput);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	useEffect(() => {
		filtering(input);
	}, [input]);

	return (
		<Wrapper>
			<GlassImg><AiOutlineSearch size="15" /></GlassImg>
			<SearchInput
				value={input}
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