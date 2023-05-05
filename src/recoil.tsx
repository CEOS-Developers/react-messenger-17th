import { atom, selector } from 'recoil';
import { ChatRoom, User, IUserDorm, Chat } from "./interface/interface";
import chatInfo from './json/chatInfo.json';
import userInfo from './json/userInfo.json';

export const activeSender = atom<number>({
    key : "activeSender",
    default: 0
})

export const chatList = atom<ChatRoom[]>({
    key: "chatList",
    default: chatInfo.chatrooms,
});


export const userDorm = atom<IUserDorm>({
    key: "userDorm",
    default: {
        id: 0,
        dorm: 'grf',
        name: 'GRYFFINDOR'
    }
})

export const activeRoomSelector = selector({
    key: "activeRoom",
    get: ({ get }) => {
        const chatRooms = get(chatList);
        const activeRoom = chatRooms.find(
            (chatroom) => chatroom.roomId === get(activeRoomId)
        );
        return activeRoom;
    },
});

export const activeRoomId = atom<number>({
    key: "activeRoomId",
    default: 0,
});

export const userList = atom<User[]>({
    key: "user",
    default: userInfo,
});

export const activeUserSelector = selector({
    key: "activeUser",
    get: ({ get }) => {
        const users = get(userList);
        const activeUser = users.find(
            (user) => user.userDorm === get(userDorm)!.dorm
        );
        return activeUser;
    },
});

export const activeOtherSelector = selector({
    key: "activeOther",
    get: ({ get }) => {
        const users = get(userList);
        const activeUser = users.find(
            (user) => user.userId === get(activeRoomId)
        );
        return activeUser;
    },
});