import { useState } from "react";
// components
import Splash from "../components/organisms/Splash";
import Navigation from "../components/organisms/Navigation";
import SingleCard from "../components/organisms/SingleCard";
import DropdownMenu from "../components/organisms/DropdownMenu";
import ProfileModal from "../components/organisms/ProfileModal";
import { DownwardArrow } from "../components/icons/DownwardArrow";
import { UpwardArrow } from "../components/icons/UpwardArrow";
// utils
import { useRecoilState } from "recoil";
import { chattingListAtom } from "../recoil/recoil";
import { chattingInterface, userInterface } from "../types/interfaces";
// styles
import styled from "styled-components";
import { PageWrapStyled } from "../components/styled/PageWrapStyled";
import { PageMainStyled } from "../components/styled/PageMainStyled";
// constants
import { PAGEKEY } from "../constants/LOCAL_KEY";
import { CHATTINGMENU } from "../constants/MENU_NAME";

const ChattingsPage = () => {
  localStorage.setItem(PAGEKEY, "chattings");

  const [roomList, setRoomList] =
    useRecoilState<chattingInterface[]>(chattingListAtom);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isProfileModal, setIsProfileModal] = useState<boolean>(false);
  const [clickedProfileInfo, setClickedProfileInfo] = useState<userInterface>({
    userId: 0,
    userName: "",
    profileImage: "",
    statusMessage: "",
  });

  const handleSortingClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsSorting(!isSorting);
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const sortRooms = (sortby: string) => {
    const sortedRooms = [...roomList];
    sortedRooms.sort((a: chattingInterface, b: chattingInterface) => {
      let x: any = new Date(a.chatList[a.chatList.length - 1].date);
      let y: any = new Date(b.chatList[b.chatList.length - 1].date);
      return sortby === CHATTINGMENU[0] ? y - x : x - y;
    });
    setRoomList(sortedRooms);
    setIsSorting(false);
  };

  const handleProfileClick = () => {
    setIsProfileModal(true);
  };

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <PageWrapStyled onContextMenu={handleRightClick}>
      <Splash />

      <Navigation menu="chattings" />

      <PageMainStyled>
        <Header>
          <span>채팅</span>
          <div onClick={handleSortingClick}>
            {isSorting ? (
              <UpwardArrow width={10} height={10} />
            ) : (
              <DownwardArrow width={10} height={10} />
            )}
          </div>
        </Header>

        <Body>
          {roomList.map((chatting) => {
            return (
              <SingleCard
                key={chatting.chattingId}
                type="chatting"
                chatInfo={chatting}
                setClickedProfileInfo={setClickedProfileInfo}
                handleProfileClick={handleProfileClick}
              />
            );
          })}
        </Body>

        {isSorting && (
          <DropdownMenu
            coords={coords}
            menuList={CHATTINGMENU}
            handleMenuClick={sortRooms}
          />
        )}
      </PageMainStyled>
      {isProfileModal && (
        <ProfileModal
          userInfo={clickedProfileInfo}
          setIsProfileModal={setIsProfileModal}
        />
      )}
    </PageWrapStyled>
  );
};

const Header = styled.header`
  width: calc(100% - 2rem);
  height: 2rem;
  margin: 1rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1.2rem;
    font-weight: 700;
    user-select: none;
  }

  div {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

const Body = styled.main`
  width: 100%;
  overflow-y: scroll;
`;

export default ChattingsPage;