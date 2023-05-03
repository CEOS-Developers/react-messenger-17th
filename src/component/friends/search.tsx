import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { searchedUserList } from '../../atom/atom';

const Search = () => {
  const [text, setText] = useState<string>('');
  const searchList = useRecoilValue(searchedUserList);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <SearchBox
        onChange={handleChange}
        placeholder=" 이름 검색"
        value={text}
      />

      {searchList.map((user, index) => (
        <>
          {index != 0 && user.userName.includes(text) ? (
            <>
              <User>
                <PartImage src={`/images/${index}.jpg`} />
                <div className="text">
                  <PartName>{user.userName}</PartName>
                  <Message>{user.userMessage}</Message>
                </div>
              </User>
            </>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
};

const SearchBox = styled.input`
  width: 13.5rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: #eaeaea;
  border: none;
  margin: 0 0 0.5rem 1rem;
`;
const User = styled.div`
  display: flex;
  align-items: center;

  :hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  .text {
    display: block;
    margin: 1.1rem 0 0 0.5rem;
    height: 3rem;
  }
`;
const PartImage = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 2.7rem;
  width: 2.7rem;
  border-radius: 1rem;
`;
const PartName = styled.div`
  font-size: 0.85rem;
`;
const Message = styled.div`
  font-size: 0.75rem;
  padding: 0.2rem 0 0 0.1rem;
  color: #4d4d4d;
`;

export default Search;
