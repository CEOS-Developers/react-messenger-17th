import { atom, selector } from "recoil";

export const inputTextState = atom<string>({
  key: "inputTextState",
  default: "",
});

export const isTypingState = selector({
  key: "isTypingState",
  get: ({ get }) => {
    const inputText = get(inputTextState);
    return inputText.trim() ? true : false;
  },
});
