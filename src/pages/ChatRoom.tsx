import styled from 'styled-components';

import { useState, useCallback, useRef } from 'react';
import ChatView from "../components/ChatRoomPage/ChatView";
import InsertMsg from "../components/ChatRoomPage/InsertMsg"
import ProfileView from "../components/ChatRoomPage/ProfileView"


function ChatRoom (){
    return(
        <div> 
            <ProfileView/>
            <ChatView/>
            <InsertMsg/>
        </div>
    );
};

export default ChatRoom;

