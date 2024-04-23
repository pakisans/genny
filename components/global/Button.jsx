import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  handleClick,
  text,
  styles,
  icon,
  disabled = false,
  aria,
}) => {
  return (
    <button
      aria-label={aria}
      disabled={disabled}
      tabIndex={0}
      className={twMerge(
        "bg-transparent text-dark text-[1.9rem] leading-[2rem] font-semibold button-effect text-center",
        styles
      )}
      type="button"
      onClick={handleClick}
    >
      {text || ""}
      {icon || null}
    </button>
  );
};

export default memo(Button);
