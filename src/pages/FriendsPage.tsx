import { useState } from "react";
// components
import Splash from "../components/organisms/Splash";
import Navigation from "../components/organisms/Navigation";
import SingleCard from "../components/organisms/SingleCard";
import ProfileModal from "../components/organisms/ProfileModal";
import { Search } from "../components/icons/Search";
import { Close } from "../components/icons/Close";
import { DownArrow } from "../components/icons/DownArrow";
import { UpArrow } from "../components/icons/UpArrow";
// utils
import { useRecoilValue } from "recoil";
import { meAtom, friendsListAtom } from "../recoil/recoil";
import { userInterface } from "../types/interfaces";
import useInput from "../hooks/useInput";
// styles
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
import { PageMainStyled } from "../components/styled/PageMainStyled";
// constants
import { PAGEKEY } from "../constants/LOCAL_KEY";

const FriendsPage = () => {
  localStorage.setItem(PAGEKEY, "friends");

  const [inputText, handleInputChange] = useInput("");
  const me = useRecoilValue<userInterface>(meAtom);
  const friendsList = useRecoilValue<userInterface[]>(friendsListAtom);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isFriendsOpen, setIsFriendsOpen] = useState<boolean>(true);
  const [isProfileModal, setIsProfileModal] = useState<boolean>(false);
  const [clickedProfileInfo, setClickedProfileInfo] = useState<userInterface>({
    userId: 0,
    userName: "",
    profileImage: "",
    statusMessage: "",
  });

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleProfileClick = () => {
    setIsProfileModal(true);
  };

  return (
    <PageWrapStyled onContextMenu={handleRightClick}>
      <Splash />

      <Navigation menu={"friends"} />

      <PageMainStyled>
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
          <SingleCard
            type="profile"
            userInfo={me}
            setClickedProfileInfo={setClickedProfileInfo}
            handleProfileClick={handleProfileClick}
          />

          <Hr></Hr>

          <Dropdown>
            <span>
              친구{" "}
              {
                friendsList.filter((user) => user.userName.includes(inputText))
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
            friendsList.map((user) => {
              if (user.userName.includes(inputText)) {
                return (
                  <SingleCard
                    key={user.userId}
                    type="profile"
                    userInfo={user}
                    setClickedProfileInfo={setClickedProfileInfo}
                    handleProfileClick={handleProfileClick}
                  />
                );
              }
            })}
        </Body>
      </PageMainStyled>

      <ProfileModal
        userInfo={clickedProfileInfo}
        isProfileModal={isProfileModal}
        setIsProfileModal={setIsProfileModal}
      />
    </PageWrapStyled>
  );
};

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
