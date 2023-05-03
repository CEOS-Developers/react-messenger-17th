export interface UserInfo {
  userId: number;
  userName: string;
  userMessage: string;
}

export interface MessageInfo {
  addText: string;
  messageId: number;
}

export interface ChatInfo {
  addText: string;
  userNum: number;
  date: string;
}

export interface ChattingRoom {
  chattingRoomId: number;
  messageId: number;
}

export interface Chat {
  chattingRoomId: number;
  message: ChatInfo[];
}

export interface Last {
  getLastInfo: string[];
}
