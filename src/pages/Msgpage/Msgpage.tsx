import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  MainMsgContainer,
  MainMsgDiv,
  MainMsgImg,
  MainMsgName,
  MainMsgText,
  MainMsgTime,
  MainTopBarDiv,
  MainTopBarIconBtn,
  MainTopBarSortBtn,
  MsgpageContainer,
} from "./Msgpage.element";

import { FaCaretDown, FaSearch } from "react-icons/fa";

import ChatDummy from "../../dummy/dummychat.json";

interface RMMProps {
  id: number;
  name: string;
  img: string;
  text: string;
  time: string;
}

const MsgPage = () => {
  const navigate = useNavigate();
  const [clickedChat, setClickedChat] = useState<number>(-1);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    setClickedChat(id);
    if (e.detail > 1) {
      handleDBClick(id);
    }
  };

  const handleDBClick = (id: number) => {
    navigate("/chat/" + id);
  };

  const RenderMainMsg = ({ id, name, img, text, time }: RMMProps) => {
    let timeArr = time.split(":");
    console.log(timeArr);
    let hour = Number(timeArr[0].split("T")[1]);
    let min = Number(timeArr[1]);
    let ampm = "오전";
    if (hour > 12) {
      hour -= 12;
      ampm = "오후";
    }
    time = ampm + " " + hour + ":" + min;

    return (
      <MainMsgContainer
        clicked={clickedChat === id}
        onClick={(e) => handleClick(e, id)}
      >
        <MainMsgImg src={img} />
        <MainMsgDiv>
          <MainMsgName>{name}</MainMsgName>
          <MainMsgText>{text}</MainMsgText>
        </MainMsgDiv>
        <MainMsgTime>{time}</MainMsgTime>
      </MainMsgContainer>
    );
  };

  const RenderChatList = () => {
    return (
      <>
        <MainTopBarDiv>
          <MainTopBarSortBtn>
            채팅 <FaCaretDown size={15} />
          </MainTopBarSortBtn>
          <MainTopBarIconBtn>
            <FaSearch />
          </MainTopBarIconBtn>
        </MainTopBarDiv>
        {ChatDummy.map((item) => {
          return (
            <RenderMainMsg
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              text={item.chat[Array(item.chat).length].msg}
              time={item.chat[Array(item.chat).length].time}
            />
          );
        })}
      </>
    );
  };

  return (
    <MsgpageContainer>
      <Sidebar />
      <MainContainer>
        <RenderChatList />
      </MainContainer>
    </MsgpageContainer>
  );
};

export default MsgPage;
