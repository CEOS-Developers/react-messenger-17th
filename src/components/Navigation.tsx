import { useNavigate } from "react-router-dom";
import {useRecoilValue} from "recoil";
import styled from 'styled-components';
import hat from '../image/icon/hat.png';
import {userDorm} from '../recoil';

const Navigator = () =>{
    const navigate = useNavigate();

    return(
        <Container>
            <NavIcon src={hat} onClick={() => navigate("/chatList")}/>
            <NavIcon src={hat} onClick={() => navigate("/chatRoom")}/>
            <NavIcon src={hat} onClick={() => navigate("/setting")}/>
            <NavIcon src={hat} onClick={() => navigate("/")} style={{ marginTop: "15rem"}}/>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 5rem;
    height: 100%;
    flex-direction: column;
    justify-item: center;
    margin-top: 2rem;
`
const NavIcon = styled.img`
    width: 3rem;
    height: 3rem;
    margin: 7px auto;
`

export default Navigator;