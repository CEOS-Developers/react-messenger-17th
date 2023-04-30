export interface userInterface {
  userId: number;
  userName: string;
  profileImage: string;
  statusMessage: string;
}

export interface chatInterface {
  userId: number;
  message: string;
  date: string;
  chatId: string;
  liked?: boolean;
}

export interface chattingInterface {
  chattingId: number;
  userIdList: number[];
  chatList: chatInterface[];
}
