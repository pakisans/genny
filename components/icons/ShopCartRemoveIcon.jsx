import { memo } from "react";

const ShopCartRemoveIcon = ({ width, height }) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 342 366"
    width={width}
    height={height}
  >
    <title>{"Obrisi"}</title>
    <path
      d="M48.3,104.5h247a12,12,0,0,1,12,12v209a40,40,0,0,1-40,40H76.3a40,40,0,0,1-40-40v-209a12,12,0,0,1,12-12Z"
      className="fill-red-500 stroke-red-500"
      style={{
        strokeMiterlimit: 10,
      }}
    />
    <line
      x1={17.5}
      y1={66.33}
      x2={324.5}
      y2={66}
      className="stroke-red-500"
      style={{
        fill: "none",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 35,
      }}
    />
    <path
      d="M104.66,0H239a12,12,0,0,1,12,12V56a0,0,0,0,1,0,0H92.66a0,0,0,0,1,0,0V12A12,12,0,0,1,104.66,0Z"
      className="fill-red-500"
    />
    <line
      x1={244.17}
      y1={235}
      x2={95.83}
      y2={235}
      className="stroke-black"
      style={{
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 25,
      }}
    />
  </svg>
);
export default memo(ShopCartRemoveIcon);
