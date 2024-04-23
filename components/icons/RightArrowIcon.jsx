import { memo } from "react";

const RightArrowIcon = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.79289 18.2071C8.40237 17.8166 8.40237 17.1834 8.79289 16.7929L13.0858 12.5L8.79289 8.20711C8.40237 7.81658 8.40237 7.18342 8.79289 6.79289C9.18342 6.40237 9.81658 6.40237 10.2071 6.79289L14.5 11.0858C15.281 11.8668 15.281 13.1332 14.5 13.9142L10.2071 18.2071C9.81658 18.5976 9.18342 18.5976 8.79289 18.2071Z"
        fill={color}
      />
    </svg>
  );
};

export default memo(RightArrowIcon);
