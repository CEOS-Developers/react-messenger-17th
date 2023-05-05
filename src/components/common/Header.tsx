import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {orderChat} from '../../store/atom';
interface IHeaderName{
    name : string
}

function Header({name} : IHeaderName){
  const [view, setView] = useRecoilState<string>(orderChat); 

  const handleOrderChat = () => {
    if(view === "최신순"){
      setView("오래된순");
    }
    else{
      setView("최신순");
    }
  };
  return (
    <Wrapper>
      {name === "상담목록" ? (
        <>
        <HeaderName>{name}</HeaderName>
        {view === "최신순" ? (
          <OrderLine onClick = {handleOrderChat}>오래된순으로 보기</OrderLine>
        ) : (
          <OrderLine onClick = {handleOrderChat}>최신순으로 보기</OrderLine>
        )}
        </>
      ) : (
        <HeaderName>{name}</HeaderName>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  user-select : none;
  justify-content: space-between;
`;
const HeaderName = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`;

const OrderLine = styled.p`
  font-size : 0.7rem;
`