export interface Chat{
    sender: number,
    chat: string,
}

export interface ChatRoom{
    roomId : number,
    dorm : string,
    chat: Chat[],
}

export interface User{
    userId: number,
    userName: string,
    userImage: string,
    userDorm: string,
    msg: string | undefined,
    hmsg: string,
}

export interface IUserDorm{
    id: number,
    dorm: string,
    name: string,
}