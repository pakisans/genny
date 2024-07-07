import { toast } from "react-hot-toast";
import XIcon from "@/components/icons/XIcon";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

let lastToastTime = 0;
const TOAST_INTERVAL = 1000;

const canShowToast = () => {
  const now = Date.now();
  if (now - lastToastTime < TOAST_INTERVAL) {
    return false;
  }
  lastToastTime = now;
  return true;
};

const customToast = {
  success: (message, onClick) => {
    if (!canShowToast()) {
      return;
    }

    toast(
      (t) => (
        <div className="border animate-fadeIn relative border-gold px-10 py-[1rem] min-w-[28rem] mt-10 text-white opacity-85 bg-gradient-to-t from-black to-darkgrey rounded-3xl">
          <button
            aria-label="toast"
            type="button"
            tabIndex={0}
            className="cursor-pointer absolute right-5 top-5"
            onClick={() => (onClick ? onClick() : toast.dismiss(t.id))}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                toast.dismiss(t.id);
              }
            }}
          >
            <XIcon width={10} height={10} color="#fff" />
          </button>
          <div className="flex items-center">
            <div className="shake-animation border-gol">
              <CheckmarkIcon
                background={"#000"}
                color={"#deba8f"}
                width={30}
                height={30}
              />
            </div>
            <span className="text-[1.5rem] leading-[2.4rem] font-semibold  mx-[1rem]">
              {message}
            </span>
          </div>
        </div>
      ),
      {
        duration: 3000,
        style: {
          background: "transparent",
          boxShadow: "none",
          border: "none",
        },
      }
    );
  },
};

export default customToast;
