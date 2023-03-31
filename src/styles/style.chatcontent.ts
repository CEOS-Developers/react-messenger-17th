import styled from 'styled-components';

export const ChatContentWrapper = styled.div`
    display: flex;
    flex: 1;
    overflow-y: scroll;
    padding-right: 5px;
    flex-direction: column;
    &::-webkit-scrollbar{
        width : 10px;
    }
    &::-webkit-scrollbar-thumb {
        height: 30%;
        background-color: rgb(137 130 211);
        border-radius: 10px;
    }
`
