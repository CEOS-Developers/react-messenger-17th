import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.p`
    font-size : 1rem;
    margin-bottom : 8px;
`

export const ChatButton = styled.button`
    width : 60px;
    height: 60px;
    cursor : pointer;
    backdrop-filter: blur(30px);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 26px;
    box-shadow : 3px 3px 3px black;
    &:active{
        box-shadow : none;
    }
`

export const ChatWrapper = styled.div`
    width: 380px;
    height: 600px;
    opacity: 0;
    display:flex;
    visibility:hidden;
    flex-direction : column;
    box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.3) 0px 12px 60px;
    background-color: rgba(247, 247, 248, 0.9);
    transition: opacity 0.5s ease-in-out;
    backdrop-filter: blur(60px);
    border-radius : 25px;
    &.show{
        visibility:visible;
        opacity : 1;
    }
`