export interface IUser {
  id: number;
  nickname: string;
  email: string;
  /*Workspaces: IWorkspace[]; // TODO 자신이 속한 워크스페이스 목록*/
}

export interface IUserWithOnline extends IUser {
  online: boolean;
}
// TODO 4주차때 이어서 구현하기 -> 채널, 채팅
export interface IChannel {
  id: number;
  name: string;
  private: boolean; // 비공개 채널 여부, 여기서는 일단 모두 false(공개)
  WorkspaceId: number;
}

export interface IChat {
  // 채널의 채팅
  id: number;
  UserId: number;
  User: IUser; // 보낸 사람
  content: string;
  createdAt: string;
  ChannelId: number;
  Channel: IChannel;
}

export interface IDM {
  // DM 채팅
  id: number;
  SenderId: number; // 보낸 사람 아이디
  Sender: IUser;
  ReceiverId: number; // 받는 사람 아이디
  Receiver: IUser;
  content: string;
  createdAt: string;
}

export interface IWorkspace {
  id: number;
  name: string;
  url: string; // 주소 창에 보이는 주소
  OwnerId: number; // 워크스페이스 만든 사람 아이디
}
