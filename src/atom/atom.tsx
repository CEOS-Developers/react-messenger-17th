import { atom } from 'recoil';
import messageInfo from './../json/message.json';
import { Chat, UserInfo } from '../interface/interface';
import userList from './../json/users.json';

export const selectedUser = atom<number>({
  key: 'selectedUser',
  default: 0,
});

export const chatList = atom<Chat[]>({
  key: 'chatList',
  default: messageInfo,
});

export const searchedUserList = atom<UserInfo[]>({
  key: 'searchedUserList',
  default: userList,
});
