import { useRecoilState, useResetRecoilState } from "recoil";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  clickedIconState,
  TodoIconPositionState,
  MessengerIconPositionState,
  todoOpenState,
  messengerOpenState,
  priorityState,
} from "../../states/atom";

import background_image from "../../assets/background_image.jpg";
import { MainpageContainer } from "./Mainpage.element";
import Todopage from "../Todopage/Todopage";
import MsgPage from "../Msgpage/Msgpage";
import ChatPage from "../ChatPage/ChatPage";
import MainIcon from "../../components/MainIcon/MainIcon";

const Mainpage = () => {
  const [todoIconPosition, setTodoIconPosition] = useRecoilState(
    TodoIconPositionState
  );
  const [messengerIconPosition, setMessengerIconPosition] = useRecoilState(
    MessengerIconPositionState
  );
  const [priority, setPriority] = useRecoilState(priorityState);
  const [clickedIcon, setClickedIcon] = useRecoilState(clickedIconState);
  const resetClickedIcon = useResetRecoilState(clickedIconState);
  const [todoOpen, setTodoOpen] = useRecoilState(todoOpenState);
  const [messengerOpen, setMessengerOpen] = useRecoilState(messengerOpenState);

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 클릭 한번 한 경우
    if (e.detail === 1) {
      // 클릭한 위치가 아이콘의 위치 안에 있는 경우
      // 아이콘 클릭 state토글
      // 아이콘 위치 밖 클릭 -> clickedIcon state 초기화
      if (
        e.pageX > todoIconPosition.left &&
        e.pageX < todoIconPosition.left + 76 &&
        e.pageY > todoIconPosition.top &&
        e.pageY < todoIconPosition.top + 100
      ) {
        if (clickedIcon === "todo") {
          resetClickedIcon();
        } else {
          setClickedIcon("todo");
        }
      } else if (
        e.pageX > messengerIconPosition.left &&
        e.pageX < messengerIconPosition.left + 76 &&
        e.pageY > messengerIconPosition.top &&
        e.pageY < messengerIconPosition.top + 100
      ) {
        if (clickedIcon === "messenger") {
          resetClickedIcon();
        } else {
          setClickedIcon("messenger");
        }
      } else {
        resetClickedIcon();
      }
    } else {
      // 더블 클릭한 경우 -> page open
      if (
        e.pageX > todoIconPosition.left &&
        e.pageX < todoIconPosition.left + 76 &&
        e.pageY > todoIconPosition.top &&
        e.pageY < todoIconPosition.top + 100
      ) {
        // setTodoRender(true);
        // window.location.assign("/todo");
        setTodoOpen(true);
        setPriority("todo");
      } else if (
        e.pageX > messengerIconPosition.left &&
        e.pageX < messengerIconPosition.left + 76 &&
        e.pageY > messengerIconPosition.top &&
        e.pageY < messengerIconPosition.top + 100
      ) {
        // window.location.assign("/messenger");
        setMessengerOpen(true);
        setPriority("messenger");
      }
    }
  };

  return (
    <BrowserRouter>
      <MainpageContainer src={background_image} onClick={handleOnClick}>
        {todoOpen && <Todopage />}
        {messengerOpen && <MsgPage />}
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/todo" element={<Todopage />} />
          <Route path="/messenger" element={<MsgPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
        </Routes>
        <MainIcon name="TODO" />
        <MainIcon name="카카오톡" />
      </MainpageContainer>
    </BrowserRouter>
  );
};

export default Mainpage;