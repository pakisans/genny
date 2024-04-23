import { memo } from "react";

const LeftArrowIcon = ({ width, height, color, tailwindClass }) => {
  return (
    <svg
      className={tailwindClass}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
    >
      <path
        d="M13.4881 6.98812L12.25 5.75L7 11L12.25 16.25L13.4881 15.0119L9.47625 11L13.4881 6.98812Z"
        fill={color}
      />
    </svg>
  );
};

export default memo(LeftArrowIcon);
