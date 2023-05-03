import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {IoPerson, IoSettingsSharp} from 'react-icons/io5';
import {BsChatSquareHeart} from 'react-icons/bs';

const Wrapper = styled.div`
bottom: 0;
overflow: hidden;
height: 12%;
width: 350px;
background: linear-gradient(white, #D0F8B7);
border-radius: 0 0 20px 20px;
`;

const Bar = styled.div`
display: flex;
width: 33%;
height: 12vh;
justify-content: center;
align-items: center;
float: left;
font-size: 28px;
`;

const activeStyle = {
    color: 'white',
    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.5))'
}

const deactiveStyle = {
    color: 'white',
    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.3))'
}

function MenuBar(){

    const menu = [
        {key: 0, path: '/List', iconName: IoPerson},
        {key: 1, path: '/Chat', iconName: BsChatSquareHeart},
        {key: 2, path: '/Setting', iconName: IoSettingsSharp},
    ];

    return(
        <Wrapper>  
    {menu.map((menu) => {
        return(
            <Bar>
            <NavLink to={menu.path} key={menu.key} style={({isActive}) => {return isActive? activeStyle:deactiveStyle;}}>
                <menu.iconName/>
            </NavLink>
            </Bar>
        );
    })}
</Wrapper>
);
}
export default MenuBar;