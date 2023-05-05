import {useState} from 'react';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {userDorm} from '../recoil';
import {useNavigate} from 'react-router-dom';
import bg1 from '../image/MainBG/1.png';
import bg2 from '../image/MainBG/2.jpeg';
import bg3 from '../image/MainBG/3.jpeg';
import bg4 from '../image/MainBG/4.jpeg';
import grf_logo from '../image/grf_logo.gif';
import hfl_logo from '../image/hfl_logo.gif';
import rav_logo from '../image/rav_logo.gif';
import sly_logo from '../image/sly_logo.gif';
import title from '../image/title.png';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: black;
`
const Background = styled.div<{imageUrl: string}>`
    width: 100%;
    height: 55rem;
    background-size: cover;
    display: flex;
    justify-content: center;
    background-position: center center;
    background-image: url(${props => props.imageUrl})
`

const FlagBox = styled.div`
    width: 60%;
    height: 60%;
    display: flex;
    justify-content: center;
`

const Flag = styled.img`
    display: flex;
    margin: 12rem 1rem 1rem 1rem;
    width : 15rem;
    height: 70%;
`
/*const TitleBox = styled.img`
    display: flex;
    width: 3rem;
    height: 5rem;
    justify-content: center;
    margin-top: 1rem;
    margin-left: 2rem;
`*/

const Main= () =>{
    const navigate = useNavigate();
    const randomNum = Math.floor(Math.random()*4);
    const bgImgList = [
        {'id' : 0, imageUrl : bg1},
        {'id' : 1, imageUrl : bg2},
        {'id' : 2, imageUrl : bg3},
        {'id' : 3, imageUrl : bg4}
    ];
    const [user, setUserDorm] = useRecoilState(userDorm);

    const setDorm=(id: number, dorm: string, name: string) => {
        setUserDorm({id, dorm, name});
    };

    function chooseDorm(id: number, dorm: string, name: string){
        setDorm(id, dorm, name);
        navigate('/chatList');
    }

    return(
        <Container>
            <Background imageUrl={bgImgList[randomNum].imageUrl}>
                <FlagBox>
                    <Flag src={grf_logo} onClick={() => chooseDorm(0, 'grf', 'GRYFFINDOR')}/>
                    <Flag src={hfl_logo} onClick={() => chooseDorm(1, 'hfl', 'HUFFLEPUFF')}/>
                    <Flag src={rav_logo} onClick={() => chooseDorm(2, 'rav', 'RAVENCLAW')}/>
                    <Flag src={sly_logo} onClick={() => chooseDorm(3, 'sly', 'SLYTHERIN')}/>
                </FlagBox>
            </Background>
        </Container>
    );

}

export default Main;