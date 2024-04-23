import { memo } from "react";

const PageLoader = ({ height }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        height ? height : ""
      }`}
    >
      <div className="animate-spin border-t-4 border-gold text-gold h-52 w-52 rounded-full mx-auto" />
    </div>
  );
};

export default memo(PageLoader);
