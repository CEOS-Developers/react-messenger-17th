import styled from "styled-components";

interface LatestMsgProps {
    userName: string;
    chatMessage: string;
    timestamp: string;
}

const LatestMsg = ({userName, chatMessage, timestamp}:LatestMsgProps) => {

  const convertStringToDate = (date: string) => {
    const stringToDate = new Date(date);

    const today = new Date();
    const isToday = 
        stringToDate.getFullYear() === today.getFullYear() &&
        stringToDate.getMonth() === today.getMonth() &&
        stringToDate.getDate() === today.getDate();

    const hours: number = stringToDate.getHours();
    const hours12: number = hours <= 12 ? hours : hours - 12;
    const minutes: string = String(stringToDate.getMinutes()).padStart(2, "0");
    const amPm: string = hours <= 12 ? "오전" : "오후";

    return isToday ? `${amPm} ${hours12}:${minutes}` : `${stringToDate.getMonth() + 1}월 ${String(stringToDate.getDate()).padStart(2, "0")}일`;};
  
  return (
    <LateContainer>
      <LateWrapper>
        <LateName>{userName}</LateName>
        <LateMessage>{chatMessage}</LateMessage>
      </LateWrapper>
      <LateTimestamp>{convertStringToDate(timestamp)}</LateTimestamp>
    </LateContainer>
  );
};

const LateContainer = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 1rem;

`;

const LateName = styled.h4`
    font-size: 1rem;
    color: black;
    margin: 0px;
`;
const LateMessage = styled.div`
    font-size: 0.9rem;
    color: #5d5c64;

`;
const LateTimestamp = styled.div``;


export default LatestMsg;


