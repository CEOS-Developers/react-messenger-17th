import { atom, selector, selectorFamily, RecoilState } from "recoil";
import usersData from "../json/usersData.json";
import chatsData from "../json/chatsData.json";
import {
  chatInterface,
  chattingInterface,
  userInterface,
} from "../interfaces/interface";

export const currentChattingId = atom<number>({
  key: "currentChattingId",
  default: 0,
});

export const currentChattingState = selector<chattingInterface>({
  key: "currentChattingState",
  get: ({ get }) => {
    return chatsData.chattings.filter(
      (chatting) => chatting.chattingId === get(currentChattingId)
    )[0];
  },
  // set: ({ set }, newObj) => set(currentChattingState, newObj),
});

// 현재 채팅방 userId list
export const currentUsersIdListState = selector<number[]>({
  key: "currentUsersIdListState",
  get: ({ get }) => {
    return get(currentChattingState).userIdList;
  },
});

// 접속한 user(=me) obj
export const userState = atom<userInterface>({
  key: "userState",
  default: usersData.users[0],
});

// 현재 채팅방 users 정보
export const currentUsersState = selector<userInterface[]>({
  key: "currentUsersState",
  get: ({ get }) => {
    return usersData.users.filter((user) =>
      get(currentUsersIdListState).includes(user.userId)
    );
  },
});

// 현재 입력하는 user
export const typingUserState = selector<userInterface>({
  key: "typingUserState",
  get: ({ get }) => {
    return get(userState);
  },
  set: ({ set }, newUser) => set(userState, newUser),
});

// 현재 채팅방 메시지 list
// export const currentChatListState: RecoilState<chatInterface[]> = selector<
//   chatInterface[]
// >({
//   key: "currentChatListState",
//   get: ({ get }) => {
//     const chatObj: chattingInterface = get(currentChattingState);
//     return chatObj.chatList;
//   },
//   set: ({ set, get }, newChatObj) => {
//     const newChatting = Object.assign(get(currentChattingState));
//     newChatting.chatList = [...currentChatListState, newChatObj];
//     set(currentChattingState, newChatting);
//   },
// });
