import styled from 'styled-components';
import { useState } from 'react';
import NotSearch from '../component/friends/notSearch';
import Search from '../component/friends/search';

const FriendsListPage = () => {
  const [isSearch, setSearch] = useState(false);

  return (
    <Container>
      <div className="header">
        <Friends>친구</Friends>
        <SearchImage
          src={`/images/search.png`}
          onClick={() => setSearch(!isSearch)}
        />
      </div>

      <SearchBox>{isSearch ? <Search /> : <NotSearch />}</SearchBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    height: 10%;
  }
`;
const Friends = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0 1rem 1rem;
`;
const SearchImage = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin: 1.9rem 0 1rem 11rem;

  :hover {
    filter: opacity(40%);
    cursor: pointer;
  }
`;
const SearchBox = styled.div`
  width: 100%;
  height: 90%;
`;

export default FriendsListPage;
