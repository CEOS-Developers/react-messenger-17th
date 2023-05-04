/*
import ChannelList from '../../components/ChannelList';
import CreateChannelModal from '../../components/CreateChannelModal';
import DMList from '../../components/DMList';
import InviteWorkspaceModal from '../../components/InviteWorkspaceModal';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import Channel from '../../pages/Channel';
*/
import useInput from '../../hooks/useInput';

//import DirectMessage from '../../pages/DirectMessage';
import { Button, Input, Label } from '../../pages/SignUp/style';
import { IChannel, IUser } from '../../typings/db';

import axios from 'axios';
import gravatar from 'gravatar';
import React, { useCallback, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSWR from 'swr';

import {
  AddButton,
  Channels,
  Chats,
  Header,
  LogOutButton,
  MenuScroll,
  ProfileImg,
  ProfileModal,
  RightMenu,
  WorkspaceButton,
  WorkspaceModal,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from './style';

import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atom';
import DirectMessage from 'src/pages/DirectMessage';
import Channel from 'src/pages/Channel';
const Workspace = () => {
  const [userData, setUserData] = useRecoilState(userState);
  const params = useParams<{ workspace?: string }>();
  // console.log('params', params, 'location', location, 'routeMatch', routeMatch, 'history', history);
  const { workspace } = params;
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
  const [showInviteWorkspaceModal, setShowInviteWorkspaceModal] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
  const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');

  var navigate = useNavigate();
  const onLogout = useCallback(() => {
    // 로그아웃 요청
    navigate('/'); // 루트 경로로 이동
  }, []);

  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src={gravatar.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.nickname} />
          </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}>로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>CEOS</Workspaces>
        <Channels>
          <WorkspaceName>CEOS</WorkspaceName>
          <MenuScroll>menu scroll</MenuScroll>
        </Channels>
        <Chats>Chats</Chats>
        <Routes>
          <Route path="/channel" element={<Channel />} />
          <Route path="/dm" element={<DirectMessage />} />
        </Routes>
      </WorkspaceWrapper>
    </div>
  );
};

export default Workspace;
