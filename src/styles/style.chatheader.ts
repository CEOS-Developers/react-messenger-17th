import styled from 'styled-components';

export const Header = styled.div`
    display : flex;
    align-items : center;
    padding : 10px;
    background-color: rgba(239, 239, 240, 0.85);
`

export const BackButton = styled.div`
    display: flex;
    align-items: center;
    min-width: 25px;
    padding: 10px 0px;
    margin-right: 15px;
    cursor: pointer;
`

export const UserName = styled.span`
    width : 100%;
    font-size : 1.3rem;
    font-style : normal;
    font-weight : bold;
    user-select : none;
    cursor : pointer;
`

export const CloseButton = styled.div`
    cursor : pointer;
    &:active { 
        box-shadow : 1px 1px 1px black;
    }
`