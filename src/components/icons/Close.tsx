import { IconProps } from "../../interfaces/iconProps";

export const Close = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.0"
      viewBox="0 0 512 512"
      fill={color}
    >
      <path d="M16.1 1.7C7.3 4.8 0 15.3 0 25c0 2 .7 5.9 1.6 8.6 1.5 4.5 10.6 13.9 110.3 113.7L220.5 256 112.3 364.3C52.9 423.8 3.4 474 2.5 475.9c-4.5 9-2.4 21.3 5 28.6 6.9 7 16.3 9.1 26.1 5.9 4.5-1.5 13.9-10.6 113.6-110.3L256 291.5l108.8 108.6c99.7 99.7 109.1 108.8 113.6 110.3 9.8 3.2 19.2 1.1 26.1-5.9 7-6.9 9.1-16.3 5.9-26.1-1.5-4.5-10.6-13.9-110.3-113.7L291.5 256l108.6-108.8C499.8 47.5 508.9 38.1 510.4 33.6c3.2-9.8 1.1-19.2-5.9-26.1-6.9-7-16.3-9.1-26.1-5.9-4.5 1.5-13.9 10.6-113.7 110.3L256 220.5 147.2 111.9C47.5 12.2 38.1 3.1 33.6 1.6c-6.1-2-11.7-1.9-17.5.1z" />
    </svg>
  );
};
