import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {

    return (
        <PageWrapper>
            <SideBar>
                <Link to="/FriendPage">
                    <img src={`${process.env.PUBLIC_URL}/image/user.png`}></img>
                </Link>
                <Link to="/ChatRoomPage">
                    <img src={`${process.env.PUBLIC_URL}/image/speech-bubble.png`}></img>
                </Link>
                <Link to="/SettingPage">
                    <img src={`${process.env.PUBLIC_URL}/image/settings.png`}></img>
                </Link>
            </SideBar>
        </PageWrapper>
      
    );
  };
  export default Layout;

  const PageWrapper = styled.div`
    width: 350px;
    height: 43rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FEF8F2;
    margin-top: 10px;
  `;

  const SideBar = styled.div`
  
  `;

