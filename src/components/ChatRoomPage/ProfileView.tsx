import styled from "styled-components";

const Header = styled.div`
    position: relative;
    background: lightyellow;
    display: flex;
    flex-direction: column;
    height: 6rem;
    border-radius:0.5rem 0.5rem 0rem 0rem;
;`

const Profile = styled.div`
    position: absolute;
;`

const CloseBtn = styled.button`
    position: absolute;
    background: rgb(250, 77, 71);
    left: 1rem;
    top: 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    border: none;
;`

function ProfileView() {
    return(
        <Header>
            <CloseBtn/>
            <Profile/>
        </Header>
    );
};

export default ProfileView;

