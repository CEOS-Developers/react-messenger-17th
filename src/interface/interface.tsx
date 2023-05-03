export interface IUser {
  userId: number;
  userName: string;
  userImg: string;
  statusMessage: string;
}

export interface IChat {
  userId: number;
  content: string;
  time: string;
}

export interface IChatRoom {
  userId: number;
  chatList: IChat[];
  //length?: number;
}
