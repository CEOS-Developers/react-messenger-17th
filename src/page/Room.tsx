import {useRecoilValue, useRecoilState} from 'recoil';
import {userDorm, activeRoomId, activeUserSelector} from '../recoil';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import MainProfile from '../components/MainProfile';
import userInfo from '../json/userInfo.json';
import FriendProfile from '../components/FriendProfile';
import chatInfo from '../json/chatInfo.json';
import {Link} from "react-router-dom";
import {ChatRoom} from '../interface/interface';

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
const TalkBox = styled.div`
    display: flex;
    margin-top: 2rem;
    width: 26rem;
    height: 37rem;
    background-color: white;
    justify-content: center;
    opacity: 0.8;
    border-radius: 0.5rem;
`

const ListBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
`
const FriendBox = styled.div`

`


const Room= () =>{
    const user = useRecoilValue(userDorm);
    const [activeRoom, setActiveRoom] = useRecoilState(activeRoomId)
    const getLastChat = (roomId: number) => {
        const lastChat = chatInfo.chatrooms.find(
            (chatRoom) => chatRoom.roomId === roomId
        )!.chat;
        return lastChat.slice(-1)[0].chat;
    }
    const getUserInfo = (roomId: number) =>{
        const userInform = userInfo.find(
            (user) => user.userId === roomId 
        );
        return userInform
    }

    return(
        <Container dorm={user.dorm}>
            <TitleBox>
                <TitleText dorm={user.dorm}>{user.name}</TitleText>
            </TitleBox>
            <TalkBox>
                <Navigation/>
                <ListBox>
                    <FriendBox>
                        {chatInfo.chatrooms.map((chatRoom: ChatRoom, index: number) => (
                        <>
                            {chatRoom.roomId!=user.id?
                            <Link 
                                to={`/chatRoom/${chatRoom.roomId}`}
                                onClick={() => setActiveRoom(chatRoom.roomId)}
                                key={chatRoom.roomId}
                            >
                                <FriendProfile
                                name={getUserInfo(chatRoom.roomId)!.userName}
                                id={index}
                                dorm={getUserInfo(chatRoom.roomId)!.userDorm}
                                img={getUserInfo(chatRoom.roomId)!.userImage}
                                msg={getLastChat(chatRoom.roomId)}
                                />

                            </Link>
                            :
                            <></>
                            }
                        
                        </>
                        ))}

                    </FriendBox>
                </ListBox>
            </TalkBox>
        </Container>
    );
}

export default Room;