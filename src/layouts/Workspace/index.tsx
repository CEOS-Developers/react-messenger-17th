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
import Menu from 'src/components/Menu';
import { IWorkspace } from '../../typings/db';
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

  const [workSpaces, setWorkSpaces] = useState<IWorkspace[]>([
    {
      id: 1,
      name: 'CEOS',
      url: 'http://localhost:3000/workspace/CEOS',
      OwnerId: 1811,
    },
    {
      id: 2,
      name: 'GDSC',
      url: 'http://localhost:3000/workspace/GDSC',
      OwnerId: 1811,
    },
    {
      id: 3,
      name: 'EWHA',
      url: 'http://localhost:3000/workspace/EWHA',
      OwnerId: 1811,
    },
    {
      id: 4,
      name: 'EFUB',
      url: 'http://localhost:3000/workspace/EFUB',
      OwnerId: 1811,
    },
  ]);
  const [channelData, setChannelData] = useState([
    {
      name: '일반',
    },
    {
      name: '프론트',
    },
    {
      name: '백엔드',
    },
  ]);
  var navigate = useNavigate();
  const onLogout = useCallback(() => {
    // 로그아웃 요청
    navigate('/'); // 루트 경로로 이동
  }, []);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev);
  }, []);

  const onClickAddChannel = () => {
    alert('공사중입니다.');
  };

  const toggleWorkspaceModal = () => {
    setShowWorkspaceModal((prev) => !prev);
  };

  const onClickCreateWorkSpace = () => {
    alert('공사중입니다.');
  };
  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.nickname} />
          </span>
          {showUserMenu && (
            <Menu style={{ right: 0, top: 38 }} show={showUserMenu} onCloseModal={onClickUserProfile}>
              <ProfileModal>
                <img src={gravatar.url(userData.email, { s: '36px', d: 'retro' })} alt={userData.nickname} />
                <div>
                  <span id="profile-name">{userData.nickname}</span>
                  <span id="profile-active">Active</span>
                </div>
              </ProfileModal>
              <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
            </Menu>
          )}
        </RightMenu>
      </Header>

      <WorkspaceWrapper>
        <Workspaces>
          {workSpaces?.map((ws: IWorkspace) => (
            <Link key={ws.id} to={`/workspace/${ws.name}/channel/일반`}>
              <WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</WorkspaceButton>
            </Link>
          ))}
          <AddButton onClick={onClickCreateWorkSpace}>+</AddButton>
        </Workspaces>
        <Channels>
          <WorkspaceName>{workspace}</WorkspaceName>
          <MenuScroll>
            {showWorkspaceModal && (
              <Menu show={showWorkspaceModal} onCloseModal={toggleWorkspaceModal} style={{ top: 95, left: 80 }}>
                <WorkspaceModal>
                  <h2>{workspace}</h2>
                  <button onClick={onClickAddChannel}>채널 만들기</button>
                  <button onClick={onLogout}>로그아웃</button>
                </WorkspaceModal>
              </Menu>
            )}
          </MenuScroll>
        </Channels>
        <Chats>Chats</Chats>
        <Routes>
          <Route path="/channel/:channel" element={<Channel />} />
          <Route path="/dm/:dm" element={<DirectMessage />} />
        </Routes>
      </WorkspaceWrapper>
    </div>
  );
};

export default Workspace;
