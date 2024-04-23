import { memo } from "react";

const Loader = ({ height }) => {
  return (
    <div
      className={`flex justify-center items-center bg-black xl:w-[30rem] xl:h-[50rem] ${
        height ? height : ""
      }`}
    >
      <div className="animate-spin border-t-4 border-red h-52 w-52 rounded-full" />
    </div>
  );
};

export default memo(Loader);
