import { message } from './interface2';
export interface UserInfo {
  userId: number;
  userName: string;
}

export interface MessageInfo {
  addText: string;
  messageId: number;
  userNum: number;
}

export interface ListInfo {
  chattingRoomId: number;
  message: message[]; // message 가져오자
}

export interface ChatInfo {
  addText: string;
  userNum: number;
}