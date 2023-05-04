import { atom, selector } from 'recoil';
import { IUser, IChat, IChatRoom } from '../interface/interface';
import userData from '../db/userData.json';
import chatData from '../db/chatData.json';

//전체 유저 정보
export const allUsersInfoState = atom<IUser[]>({
  key: 'allUserInfo',
  default: userData.users,
});

//내 정보
export const myInfoSelector = selector<IUser>({
  key: 'myInfo',
  get: ({ get }) => {
    const allUsers = get(allUsersInfoState);
    return allUsers[0];
  },
});

//친구들 정보
export const friendsInfoSelector = selector<IUser[]>({
  key: 'friendsInfo',
  get: ({ get }) => {
    const allUsers = get(allUsersInfoState);
    return allUsers.filter((user) => user.userId !== 0);
  },
});

//전체 채팅방 정보
export const allChatRoomsInfoState = atom<IChatRoom[]>({
  key: 'allChatRoomsInfo',
  default: chatData.chatRooms,
});

/*
//선택된 채팅방의 모든 채팅
export const selectedChatListState = atom<IChat[]>({
  key: 'selectedChatList',
  default: [],
});

//선택된 친구의 모든 정보
export const selectedFriendInfoState = atom<IUser>({
  key: 'selectedFriendInfo',
  default: userData.users[1],
});
*/

//채팅방 안에서 현재 사용 유저
export const currentUserState = atom<IUser>({
  key: 'currentuser',
  default: userData.users[0],
});