export interface IChat {
    id : number;
    userid : number;
    message : string;
}

export interface IChatProps extends IChat{
    time? : string | null;
}

export interface IChatRoom{
    roomid : number;
    userid : number;
    username : string;
    messages : IChat[];
}

export interface IUser{
    userid : number;
    username : string;
}

export interface IMessage{
    id : number;
    userid : number;
    message : string;
}

export interface IRoomId{
    roomid : number;
}