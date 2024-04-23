"use client";

import { memo, useEffect } from "react";

const { default: Header } = require("./Header");

const BaseLayout = ({ children }) => {
  useEffect(() => {
    function adjustFrameWidth() {
      const frameContainer = document.querySelector(".frame-container");
      const windowWidth = window.innerWidth;

      frameContainer.style.width = `${Math.min(
        windowWidth - 20,
        windowWidth * 0.9
      )}px`;
    }

    adjustFrameWidth();
    window.addEventListener("resize", adjustFrameWidth);

    return () => window.removeEventListener("resize", adjustFrameWidth);
  }, []);
  return (
    <div className="parent-container">
      <div className="frame-container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default memo(BaseLayout);
