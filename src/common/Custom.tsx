import { User } from "./interface";
import chatData from "../json/chatRoom.json";
import userData from "../json/userData.json";

const chatrooms = chatData.rooms;
const users = userData.users;

export const getRoomMembers = (roomId: number, includeCurUser: Boolean) => {
  const roomMembers: User[] = [];
  chatrooms[roomId].users.map((userId) => roomMembers.push(users[userId]));
  if (!includeCurUser) {
    roomMembers.shift();
  }
  return roomMembers;
};