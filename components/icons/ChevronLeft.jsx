import { memo } from "react";

const ChevronLeft = ({ width, height, twStyles }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="arrow-circle-down"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className={twStyles}
  >
    <path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM8.586,13.414a2,2,0,0,1,0-2.828l4.673-4.673,1.414,1.414L10,12l4.711,4.712L13.3,18.126Z" />
  </svg>
);
export default memo(ChevronLeft);
