import styled from "styled-components";

interface SmallButtonProps {
  text: string;
  handleClick: () => void;
}

const SmallButton = ({ text, handleClick }: SmallButtonProps) => {
  return <Button onClick={handleClick}>{text}</Button>;
};

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default SmallButton;
