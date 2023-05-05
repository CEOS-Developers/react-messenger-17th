import { IUser } from '../../typings/db';

import React, { useEffect, VFC } from 'react';
import { useParams } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { userState } from 'src/recoil/atom';
import { useRecoilState } from 'recoil';
interface Props {
  member: IUser;
}
const EachDM: VFC<Props> = ({ member }) => {
  const { workspace, dm } = useParams<{ workspace?: string; dm?: string }>();
  const location = useLocation();
  const [userData, setUserData] = useRecoilState(userState);
  const date = localStorage.getItem(`${workspace}-${member.id}`) || 0;

  return (
    <NavLink key={member.id} to={`/workspace/${workspace}/dm/${member.id}`}>
      <i
        className={`c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence c-icon--presence-offline
        `}
        aria-hidden="true"
        data-qa="presence_indicator"
        data-qa-presence-self="false"
        data-qa-presence-active="false"
        data-qa-presence-dnd="false"
      />
      <span>{member.nickname}</span>
      {member.id === userData?.id && <span> (나)</span>}
    </NavLink>
  );
};

export default EachDM;
