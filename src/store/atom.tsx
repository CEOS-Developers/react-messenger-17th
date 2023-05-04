import { atom } from 'recoil';
import message from '../data/message.json';
import user from '../data/user.json';
import {IChatRoom, IUser,IFriendItem} from './interface';

export const roomList = atom<IChatRoom[]>({
  key: 'roomList',
	default: message
});
export const friendList = atom<IFriendItem[]>({
  key : 'friendList',
	default : user
})
export const userInfo = atom<IUser>({
	key: 'userInfo',
	default: user[0]
});

export const partnerInfo = atom<IUser>({
	key: 'partnerInfo',
	default: user[1]
});

export const showDivState = atom<boolean>({
	key: 'showDivState',
	default: false,
});
  
export const hideButtonState = atom<boolean>({
	key: 'hideButtonState',
	default: false,
});
