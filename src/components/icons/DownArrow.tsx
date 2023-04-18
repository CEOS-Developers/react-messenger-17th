import { IconProps } from "../../interfaces/iconProps";

export const DownArrow = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.0"
      viewBox="0 0 512 512"
      fill={color}
    >
      <path d="M19 115.9C4.7 120.3-3.1 135 1.5 149.1c1.6 5.2 6.9 10.6 120.4 124.2 86.7 86.8 119.8 119.3 123.1 121 6.2 3 15.8 3 22 0 3.3-1.7 36.4-34.2 123.1-121 113.5-113.6 118.8-119 120.4-124.2 6.6-20.3-12.3-39.2-32.6-32.6-5.2 1.7-10.3 6.6-113.7 109.9L256 334.5 147.7 226.4C48.5 127.2 39.1 118.1 34.6 116.6c-5.2-1.7-11.4-2-15.6-.7z" />
    </svg>
  );
};
