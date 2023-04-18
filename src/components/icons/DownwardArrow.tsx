import { IconProps } from "../../interfaces/iconProps";

export const DownwardArrow = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.0"
      viewBox="0 0 512 512"
      fill={color}
    >
      <path d="M78.3 157.7c-2.9.6-6.3 4.9-6.3 7.9 0 1.5 2 4.6 5.2 8.1 2.9 3.2 43.4 45.1 90.1 93 83.4 85.8 84.9 87.3 88.7 87.3 3.8 0 5.3-1.5 88.7-87.3 46.7-47.9 87.2-89.8 90.1-93 5.9-6.5 6.4-9.1 2.8-13.4l-2.4-2.8-177.4-.1c-97.5-.1-178.3.1-179.5.3z" />
    </svg>
  );
};
