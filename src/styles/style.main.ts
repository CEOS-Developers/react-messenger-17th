import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items : center;
`

export const ButtonWrapper = styled.div`
    position : absolute;
    right : 24px;
    bottom : 24px;
`
export const Title = styled.p`
    font-size : 1rem;
    margin-bottom : 8px;
`

export const ChatButton = styled.button`
    width : 60px;
    height: 60px;
    cursor : pointer;
    box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.22) 0px 4px 20px;
    backdrop-filter: blur(30px);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 26px;
    transition: box-shadow 0.2s ease-out 0s;
    animation: 0.2s cubic-bezier(0.1, 0, 0.6, 1) 0.35s 1 normal backwards running fcEaNs;
`

export const ChatWrapper = styled.div`
    width: 380px;
    height: 600px;
    opacity: 0;
    position : absolute;
    right : 24px;
    bottom : 24px;
    box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.3) 0px 12px 60px;
    background-color: rgba(247, 247, 248, 0.9);
    backdrop-filter: blur(60px);
    border-radius : 25px;
    &.show{
        opacity : 1;
    }
`