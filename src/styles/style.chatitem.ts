import styled from 'styled-components';

export const MyMessageWrapper = styled.div`
    display : flex;
`
export const MySendTime = styled.span`
    font-size : 0.3rem;
    margin-top : auto;
    margin-right : 3px;
    margin-bottom : 20px;
    text-align : right;
    flex : 1;
    white-space: nowrap;
    user-select : none;
`
export const MyMessage = styled.div`
    display : flex;
    margin-left : auto;
    color: rgb(255, 255, 255);
    background-color: rgb(83, 75, 163);
    border-radius: 18px;
    min-width: 18px;
    padding:10px;
    margin-bottom: 10px;
    word-break : break-all;
    
`

export const PartnerMessage = styled.div`
    display : flex;
`

export const UserImage = styled.img`
    width : 3rem;
    height : 3rem;
    border-radius : 2rem;
    user-select : none;
`

export const MessageWrapper = styled.div`
    margin-bottom: 20px;
    margin-left : 10px;
    display : flex;
    width : 84%;
    flex-direction : column;
`
export const UserInfoWrapper = styled.div`
    display:flex;
`

export const UserName = styled.span`
    font-size : 0.8rem;
    margin-bottom : 3px;
    user-select : none;
`

export const UserMessage = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    word-break : break-all;
`

export const SendTime = styled.span`
    font-size : 0.3rem;
    margin-top : auto;
    margin-left : 3px;
    white-space: nowrap;
    user-select : none;
`