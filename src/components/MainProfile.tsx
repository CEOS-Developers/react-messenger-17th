import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import { activeUserSelector } from '../recoil';
/*import Digory from '../image/chrt/Digory.jpeg';
import Potter from '../image/chrt/Potter.jpeg';
import Luna from '../image/chrt/Luna.jpeg';
import Malfoy from '../image/chrt/Malfoy.jpeg';*/

const Container = styled.div`
    display: flex;
    width : 90%;
    margin-left : 5%;
    hegith: 10rem;
    border-bottom : 1px solid gray;

`
const ImageBox = styled.div`
    width : 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 0.8rem;
    margin-top: 2rem;


`
const UserImg = styled.img`
    width : 4rem;
    height: 4rem;
    display: flex;
    background-size: cover;
`
const UserName = styled.div`
    align-items: center;
    text-align: center;
    display: flex;
    color : white;
    margin : 1rem auto;
`
const UserState = styled.div`
    display: flex;
    color : white;
    margin : 4rem auto;
`


const MainProfile = () =>{
    const userProfile = useRecoilValue(activeUserSelector);
    if (!userProfile) return null;
    console.log(userProfile);
    console.log(userProfile.userImage);
    let img: string|undefined;
    /*switch (userProfile.userImage){
        case "Potter" : 
            img = "Potter"
            break;
        case "Digory" : 
            img = "Digory"
            break;
        case "Luna" : 
            img = "Luna"
            break;
        case "Malfoy" : 
            img = "Malfoy"
            break;
        default:
            img = undefined;
            break;
            
    }*/
    return (
        <Container>
            <ImageBox>
                <UserImg src={`src/image/chrt/${userProfile.userImage}.jpeg`}/>
                <UserName>{userProfile.userName}</UserName>
            </ImageBox>
            <UserState>{userProfile.msg}</UserState>
        </Container>
    )
    
}

export default MainProfile;