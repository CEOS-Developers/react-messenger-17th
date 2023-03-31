export interface IChat {
    id : number;
    userid : number;
    message : string;
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