import { atom, atomFamily, selector, selectorFamily } from "recoil";
import usersData from "../json/usersData.json";
import chatsData from "../json/chatsData.json";
import {
  chatInterface,
  chattingInterface,
  userInterface,
} from "../types/interfaces";

export const meAtom = atom<userInterface>({
  key: "meAtom",
  default: usersData.users[0],
});

export const friendsListAtom = atom<userInterface[]>({
  key: "friendsListAtom",
  default: usersData.users.slice(1),
});

export const chattingListAtom = atom<chattingInterface[]>({
  key: "chattingListAtom",
  default: chatsData.chattings,
});

export const roomInfoAtomFamily = atomFamily<chattingInterface, number>({
  key: "roomInfoAtomFamily",
  default: (roomId) =>
    chatsData.chattings.filter((chatting) => chatting.chattingId === roomId)[0],
});

export const chatListSelectorFamily = selectorFamily<
  chatInterface[],
  { roomId: number }
>({
  key: "chatListSelectorFamily",
  get:
    ({ roomId }) =>
    ({ get }) => {
      const roomInfo = get(roomInfoAtomFamily(roomId));
      return roomInfo.chatList;
    },
  set:
    ({ roomId }) =>
    ({ get, set }, newChatList) => {
      const newRoomInfo = { ...get(roomInfoAtomFamily(roomId)) };
      newRoomInfo.chatList = newChatList as chatInterface[];
      set(roomInfoAtomFamily(roomId), newRoomInfo);
    },
});

export const currentUsersAtomFamily = atomFamily<userInterface[], number[]>({
  key: "currentUsersAtom",
  default: (userIdList) =>
    usersData.users.filter((user) => userIdList.includes(user.userId)),
});
