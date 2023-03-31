import React from 'react';
import DirectMessage from 'src/pages/DirectMessage';
import { Routes, Route, Navigate } from 'react-router-dom';

//import loadable from '@loadable/component'; -> 왜인지 버전오류..
import LogIn from 'src/pages/Login';
import SignUp from 'src/pages/SignUp';
//const LogIn = loadable(() => import('../pages/Login'));
//const SignUp = loadable(() => import('../pages/SignUp'));
// 코드 스플리팅 !!

import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
export default function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/workspace/:workspace/dm/:id" element={<DirectMessage />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
        {/*매칭이 되지 않는 url 들어오면 루트경로로 Redirect*/}
      </Routes>
    </RecoilRoot>
  );
}
