import { useState, useRef, useEffect } from "react";
// components
import Splash from "../components/Splash";
import Navigation from "../components/Navigation";
import SingleCard from "../components/SingleCard";
import { Search } from "../components/icons/Search";
import { Close } from "../components/icons/Close";
import { DownArrow } from "../components/icons/DownArrow";
import { UpArrow } from "../components/icons/UpArrow";
// styles
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
import { PageMainStyled } from "../components/styled/PageMainStyled";
// constants
import { PAGEKEY } from "../constants/LOCAL_KEY";
import usersData from "../json/usersData.json";

const FriendsPage = () => {
  localStorage.setItem(PAGEKEY, "friends");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isFriendsOpen, setIsFriendsOpen] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>("");
  const frinedsList = usersData.users.slice(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <PageWrapStyled onContextMenu={handleRightClick}>
      <Splash />

      <Navigation menu={"friends"} />

      <Main>
        <Header>
          <HeaderTitle>
            <span>친구</span>
            <IconWrapper onClick={() => setIsSearching(!isSearching)}>
              <Search width={18} height={18} />
            </IconWrapper>
          </HeaderTitle>

          {isSearching && (
            <HeaderInput>
              <input
                value={inputText}
                onChange={handleInputChange}
                placeholder="이름 검색"
                autoFocus
                spellCheck="false"
              ></input>
              <IconWrapper onClick={() => setIsSearching(false)}>
                <Close width={12} height={12} />
              </IconWrapper>
            </HeaderInput>
          )}
        </Header>

        <Body>
          <SingleCard type="profile" userInfo={usersData.users[0]} />

          <Hr></Hr>

          <Dropdown>
            <span>
              친구{" "}
              {
                frinedsList.filter((user) => user.userName.includes(inputText))
                  .length
              }
            </span>
            <IconWrapper onClick={() => setIsFriendsOpen(!isFriendsOpen)}>
              {isFriendsOpen ? (
                <DownArrow width={10} height={10} color={"var(--gray-font)"} />
              ) : (
                <UpArrow width={10} height={10} color={"var(--gray-font)"} />
              )}
            </IconWrapper>
          </Dropdown>

          <Hr></Hr>

          {isFriendsOpen &&
            frinedsList.map((user) => {
              if (user.userName.includes(inputText)) {
                return (
                  <SingleCard
                    type="profile"
                    key={user.userId}
                    userInfo={user}
                  />
                );
              }
            })}
        </Body>
      </Main>
    </PageWrapStyled>
  );
};

const Main = styled(PageMainStyled)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Header = styled.header`
  width: calc(100% - 2rem);
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1.2rem;
    font-weight: 700;
    user-select: none;
  }

  div {
    margin: 0 1rem 0 auto;
  }
`;

const HeaderInput = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;

  input {
    width: 10rem;
    height: 2rem;
    padding: 0 1rem;
    border: 1px solid var(--gray-font);
    border-radius: 1rem;

    &:focus {
      outline: none;
    }
  }

  div {
    margin: 0 0.5rem 0 auto;
  }
`;

const Body = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Dropdown = styled.div`
  width: calc(100% - 2rem);
  height: 1rem;
  margin: 0 1rem;
  display: flex;
  align-items: center;

  span {
    font-size: small;
    color: var(--gray-font);
    user-select: none;
  }

  div {
    margin: 0 0.5rem 0 auto;
  }
`;

const Hr = styled.hr`
  width: calc(100% - 2rem);
  min-height: 0.5px;
  margin: 0.5rem 1rem;
  background-color: var(--gray-tag);
  border: none;
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: var(--light-gray-tag);
  }
`;

export default FriendsPage;
