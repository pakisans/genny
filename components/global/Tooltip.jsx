import { memo, useState } from "react";

const Tooltip = ({ children, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute right-0 whitespace-nowrap bg-gold opacity-70  text-black text-[1.2rem] py-1 px-2 rounded-md bottom-full mb-1 z-10">
          {text}
        </div>
      )}
    </div>
  );
};

export default memo(Tooltip);
