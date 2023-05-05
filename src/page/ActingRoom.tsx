import {useEffect, useRef} from 'react';
import {useRecoilValue, useRecoilState} from 'recoil';
import {userDorm, activeRoomSelector, activeOtherSelector, activeRoomId} from '../recoil';
import styled from 'styled-components';
import grf from '../image/grf/dorm.jpeg';
import hfl from '../image/hfl/dorm.jpeg';
import rav from '../image/rav/dorm.jpeg';
import sly from '../image/dorm.jpeg';
import {useLocation} from 'react-router-dom';
import theme from "../style/theme";
import ChatItem from "../components/ChatItem";
import InputBox from "../components/InputBox";


const Container = styled.div<{dorm: string}>`
    width: 100%;
    height: 55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme, dorm })=> theme.color[dorm]}

`
const TitleBox = styled.div`
    display: flex;
    margin-top : 3rem;
    width : 100%;
    height: 5rem;
    color: white;
    justify-content: center;
    opacity: 0.8;
`

const TitleText = styled.div<{dorm: string}>`
    font-size: 4rem;
    color: dorm;
    text-align: center;
    font-family: 'Potter';
`
const TalkBox = styled.div<{dorm: string}>`
    display: flex;
    margin-top: 2rem;
    width: 26rem;
    height: 37rem;
    flex-direction: column;
    background-image : url(${(props) => grf});
    background-size : cover;
    justify-content: center;
    opacity: 0.8;
    border-radius: 0.5rem;
`

const ChatBox = styled.div`
    display: flex;
    margin-top: 1rem;
    width: 26rem;
    margin-left: 1rem;
    height: 90%;
    flex-direction: column;
    overflow: auto;
`



const ActingRoom= () =>{
    const user = useRecoilValue(userDorm);
    const roomInfo = useRecoilValue(activeRoomSelector);
    const other =  useRecoilValue(activeOtherSelector);
    const [activeRoom, setRoomId] = useRecoilState(activeRoomId);
    /*const msgRef = useRef<HTMLUListElement>(null);*/

    if (!other) return null;

    /*const scrollToBottom = () =>{
        if(msgRef.current){
            msgRef.current!.scrollTop = msgRef.current!.scrollHeight;
        }

    }

    useEffect(() => {
        scrollToBottom();
    }, [roomInfo])

*/
    return(
        <Container dorm={user.dorm}>
            <TitleBox>
                <TitleText dorm={user.dorm}>{user.name}</TitleText>
            </TitleBox>
            <TalkBox dorm={user.dorm}>
                    <ChatBox /*ref={msgRef}*/>
                    {roomInfo!.chat.map((chat, index)=>(
                        <ChatItem
                            sendId = {chat.sender}
                            msg = {chat.chat}
                        />

                    ))}
                    </ChatBox>
                <InputBox/>
            </TalkBox>
        </Container>
    );
};

export default ActingRoom;