import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {

    return (
        <PageWrapper>
            <SideBar>
                <Link to="/FriendPage">
                    <IconImg src={`${process.env.PUBLIC_URL}/image/user.png`}/>
                </Link>
                <Link to="/ChatRoomPage">
                    <IconImg src={`${process.env.PUBLIC_URL}/image/speech-bubble.png`}/>
                </Link>
                <Link to="/SettingPage">
                    <IconImg src={`${process.env.PUBLIC_URL}/image/settings.png`}/>
                </Link>
            </SideBar>
            <Main>
                <Outlet/>
            </Main>
        </PageWrapper>
      
    );
  };
  export default Layout;

const PageWrapper = styled.div`
    width: 350px;
    height: 43rem;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    background-color: #FEF8F2;
    margin-top: 10px;
    `;

const Main = styled.div`
  width: 80%;
  position: relative;
  background-color: #FEF8F2;    
  border-radius: 0px 20px 20px 0px;
`;

const SideBar = styled.div`
    position: relative;
    width: 20%;
    height: 100%;
    background-color: #BBCEFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px 0px 0px 20px;
    gap: 25px;
`;

const IconImg = styled.img`
    width: 50%;
    transform: translate(50%, 100%);
`;