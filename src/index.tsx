import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import FriendsPage from './components/FriendsPage/FriendsPage';
import ChatRoomListPage from './components/ChatRoomListPage/ChatRoomListPage';
import ChatRoomPage from './components/ChatRoomPage/ChatRoomPage';
import SettingPage from './components/SettingPage/SettingPage';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <FriendsPage /> },
      { path: 'friends', element: <FriendsPage /> },
      { path: 'chatrooms', element: <ChatRoomListPage /> },
      { path: 'settings', element: <SettingPage /> },
    ],
  },
  { path: 'chatrooms/:userId', element: <ChatRoomPage /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
