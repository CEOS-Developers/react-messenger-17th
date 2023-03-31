import { atom } from 'recoil';

export const userState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: {
    id: 811,
    nickname: 'test',
    email: 'test',
    /*Workspaces: IWorkspace[]; // TODO 자신이 속한 워크스페이스 목록 -> 4주차때 확장*/
  }, // default value (aka initial value)
});
