import Chat from '../../components/Chat';
import { ChatZone, Section, StickyHeader } from './styles';
import { IChat, IDM } from '../../typings/db';
import React, { FC, RefObject, useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface Props {
  scrollbarRef: RefObject<Scrollbars>;
  isReachingEnd?: boolean;
  isEmpty: boolean;
  chatSections: { [key: string]: (IDM | IChat)[] };
}
const ChatList: FC<Props> = ({ scrollbarRef, chatSections }) => {
  const onScroll = useCallback(
    (values: any) => {
      /*
      if (values.scrollTop === 0 && !isReachingEnd && !isEmpty) {
        scrollbarRef.current?.scrollTop(scrollbarRef.current?.getScrollHeight() - values.scrollHeight);
      }
      */
    },
    [scrollbarRef],
  );

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
