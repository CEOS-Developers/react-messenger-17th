import { IconProps } from "../../interfaces/iconProps";

export const UpwardArrow = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.0"
      viewBox="0 0 512 512"
      fill={color}
    >
      <path d="M165.8 246.8c-47.5 48.8-88 90.6-90 93-4.3 4.8-4.7 7.7-1.7 11.6l2 2.6h359.8l2-2.6c3-3.9 2.6-6.7-1.8-11.8-2.2-2.5-42.7-44.4-90.1-93.1-84.8-87.1-86.2-88.5-90-88.5-3.8 0-5.2 1.4-90.2 88.8z" />
    </svg>
  );
};
