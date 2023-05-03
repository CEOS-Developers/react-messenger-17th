import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import FriendsPage from './components/FriendsPage/FriendsPage';
import ChatRoomListPage from './components/ChatRoomListPage/ChatRoomListPage';
import ChatRoomPage from './components/ChatRoomPage/ChatRoomPage';
import SettingPage from './components/SettingPage/SettingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <FriendsPage /> },
      { path: 'friends', element: <FriendsPage /> },
      { path: 'chatrooms', element: <ChatRoomListPage /> },
      { path: 'chatrooms/:userId', element: <ChatRoomPage /> },
      { path: 'settings', element: <SettingPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
