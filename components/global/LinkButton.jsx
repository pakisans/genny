import { memo } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const LinkButton = ({ href, text, styles, icon }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={twMerge(
          "inline-flex items-center justify-center text-[1.9rem] leading-[2rem] font-semibold button-effect",
          styles
        )}
      >
        {icon || null}
        {text ? <span className="ml-2">{text}</span> : null}
      </a>
    </Link>
  );
};

export default memo(LinkButton);
