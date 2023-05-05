import React, { FC, useCallback, useEffect, useState } from 'react';
import EachDM from '../EachDM';
const DMList = () => {
  const [memberData, setMemberData] = useState([
    {
      id: 924,
      nickname: '김서연',
      email: 'ceos@gmail.com',
    },
    {
      id: 400,
      nickname: '권가은',
      email: '가은@gmail.com',
    },
    {
      id: 963,
      nickname: '최민주',
      email: '민주@gmail.com',
    },
    {
      id: 134,
      nickname: '장효신',
      email: '효신@gmail.com',
    },
  ]);
  return (
    <>
      <h2>
        <span>Direct Messages</span>
      </h2>
      <div>
        {memberData?.map((member) => {
          return <EachDM key={member.id} member={member} />;
        })}
      </div>
    </>
  );
};

export default DMList;
