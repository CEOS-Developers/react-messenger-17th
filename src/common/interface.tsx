export interface User {
    id: number;
    name: string;
    profileImage: string;
    message: string;
  }
  
  export interface Chat {
    id: number;
    senderId: number;
    text: string;
    date: string;
  }