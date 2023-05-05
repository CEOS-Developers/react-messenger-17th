import React, { FC, useCallback, useEffect, useState } from 'react';
import EachDM from '../EachDM';
import ChannelDMListJson from '../../db/channelDMList.json';
import { IUser } from 'src/typings/db';
import { useParams } from 'react-router';

import { serialize } from 'v8';
const SearchSrc = require('./search.png');
type ChannelDMListDataType = {
  [workspace: string]: IUser[];
};
const DMList = () => {
  const { workspace } = useParams();
  const chanelDMListData: ChannelDMListDataType = ChannelDMListJson;

  const [searchValue, setSearchValue] = useState('');
  const [memberData, setMemberData] = useState(workspace && chanelDMListData[workspace]);
  useEffect(() => {
    setMemberData(workspace && chanelDMListData[workspace]);
  }, [workspace]);

  return (
    <>
      <h2>
        <span>Direct Messages</span>
      </h2>
      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={SearchSrc} width={'20px'} />
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </span>
      <div>
        {memberData &&
          memberData
            ?.filter((member) => member.nickname.includes(searchValue))
            .map((member) => {
              return <EachDM key={member.id} member={member} />;
            })}
      </div>
    </>
  );
};

export default DMList;
