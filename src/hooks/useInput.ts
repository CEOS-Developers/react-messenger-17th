import { useState } from "react";

type inputProps = [
  string,
  (
    value:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void,
  () => void
];

const useInput = (defaultValue: string): inputProps => {
  const [inputText, setInputText] = useState<string>(defaultValue);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputText(e.target.value);
  };

  const resetInput = () => setInputText(defaultValue);

  return [inputText, handleInputChange, resetInput];
};

export default useInput;
