import { atom } from 'recoil';
import { IUser, IChat } from '../interface/interface';
import userData from '../db/userData.json';
import chatData from '../db/chatData.json';

/*
export const userState = atom<IUser[]>({
  key: 'user',
  default: userData,
});
*/

export const chatState = atom<IChat[]>({
  key: 'chat',
  default: chatData,
});

export const currentUserState = atom<IUser>({
  key: 'currentuser',
  default: userData[0],
});
