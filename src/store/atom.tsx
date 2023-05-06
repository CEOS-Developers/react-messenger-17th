import { atom } from 'recoil';
import message from '../data/message.json';
import user from '../data/user.json';
import { IChatRoom, IUser, IFriendItem, IRoomId } from './interface';

export const roomList = atom<IChatRoom[]>({
	key: 'roomList',
	default: message
});

export const roomInfo = atom<Number>({
	key: 'roomId',
	default: -1,
})
export const friendList = atom<IFriendItem[]>({
	key: 'friendList',
	default: user
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

export const selectedRoom = atom<number>({
	key: 'selectedRoom',
	default: -1,
});

export const isSearch = atom<boolean>({
	key: 'isSeach',
	default: false,
})

export const orderChat = atom<string>({
	key: 'orderChat',
	default: "최신순",
})

export const searchInput = atom<string>({
	key: 'searchInput',
	default: "",
})

export const showProfile = atom<number>({
	key: 'showProfile',
	default: -1,
})