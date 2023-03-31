import styled,{keyframes} from 'styled-components';

function blinkingEffect() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
}

function fadeIn(){
    return keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
    `;
}

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
    font-size : 4vh;
    margin-bottom : 15px;
    animation: ${blinkingEffect} 1s step-end infinite;
    user-select : none;
    text-align : center;
    
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
    animation: fadeIn 0.5s ease-out;
    flex-direction : column;
    box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.3) 0px 12px 60px;
    background-color: rgba(247, 247, 248, 0.9);
    transition: opacity 0.5s ease-in-out;
    backdrop-filter: blur(60px);
    border-radius : 25px;
    &.show{
        animation: ${fadeIn} 1s ease-out;
        opacity : 1;
    }
`