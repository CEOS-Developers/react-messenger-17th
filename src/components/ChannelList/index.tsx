import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useSWR from 'swr';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atom';
import ChannelListDataJson from '../../db/channelListData.json';
import { IChannel } from 'src/typings/db';

type ChannelChatDataType = {
  [workspace: string]: IChannel[];
};
const ChannelList = () => {
  const { workspace, channel } = useParams();

  const ChanelListData: ChannelChatDataType = ChannelListDataJson;
  const location = useLocation();

  const [userData, setUserData] = useRecoilState(userState);
  const [channelData, setChannelData] = useState(workspace && ChanelListData[workspace]);

  useEffect(() => {
    setChannelData(workspace && ChanelListData[workspace]);
  }, [workspace]);
  const [countList, setCountList] = useState({});

  const toggleChannelCollapse = useCallback(() => {
    // setChannelCollapse((prev) => !prev);
  }, []);

  const resetCount = useCallback(
    (id: number) => () => {
      setCountList((list) => {
        return {
          ...list,
          [id]: undefined,
        };
      });
    },
    [],
  );

  useEffect(() => {
    console.log('ChannelList: workspace 바꼈다', workspace, location.pathname);
    setCountList({});
  }, [workspace, location]);

  return (
    <>
      <h2>
        {/**    <CollapseButton collapse={channelCollapse} onClick={toggleChannelCollapse}>
          <i
            className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline"
            data-qa="channel-section-collapse"
            aria-hidden="true"
          />
        </CollapseButton> */}

        <span>Channels</span>
      </h2>
      <div>
        {channelData &&
          channelData?.map((ch: IChannel) => {
            return (
              <NavLink key={ch.name} to={`/workspace/${workspace}/channel/${ch.name}`}>
                <span className={channel === ch.name ? 'bold' : undefined}># {ch.name}</span>
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default ChannelList;
