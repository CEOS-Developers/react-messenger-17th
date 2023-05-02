import { atom, selector } from 'recoil';
import { IUser, IChat } from '../interface/interface';
import userData from '../db/userData.json';
import chatData from '../db/chatData.json';

/*
export const userState = atom<IUser[]>({
  key: 'user',
  default: userData,
});
*/

//채팅 정보
export const chatState = atom<IChat[]>({
  key: 'chat',
  default: chatData,
});

//채팅방 안에서 현재 사용 유저
export const currentUserState = atom<IUser>({
  key: 'currentuser',
  default: userData[0],
});

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

//**otherUserState 만들기
