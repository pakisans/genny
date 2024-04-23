"use client";
import Link from "next/link";
import ShopCartIcon from "../icons/ShopCartIcon";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { useCart } from "../context/ShopCartContext";

const Header = () => {
  const { cartItems } = useCart();
  const pathname = usePathname();

  return (
    <header className="-mt-[5rem]">
      <div className="border-fade h-[.2rem] w-[16rem] md:w-[22rem] xl:w-[30rem] mx-auto mt-[.6rem]"></div>
      <Link href={"/"}>
        <h1 className="mx-auto text-center text-white p-4 text-[2rem] md:text-[3rem] leading-[3.6rem] active:scale-95 hover:scale-110 transition duration-150 ease-in-out cursor-pointer hover:text-browno z-[9999]">
          GENNY
        </h1>
      </Link>
      <div className="border-fade h-[.2rem] w-[16rem] md:w-[22rem] xl:w-[30rem] mx-auto -mt-[.4rem]"></div>
      {pathname !== "/" && cartItems.length > 0 ? (
        <Link href={"/moj-izbor"} passHref>
          <button
            aria-label="Moj izbor"
            type="button"
            className="absolute top-10 right-10 md:right-20 hover:scale-125 button-effect z-[99999]"
          >
            <ShopCartIcon width={30} height={30} />

            <span className="absolute flex justify-center leading-[1.2rem] -top-2 -right-2 bg-gold text-white text-[1.6rem] w-6 h-6 rounded-full  text-center">
              {cartItems.length}
            </span>
          </button>
        </Link>
      ) : null}
    </header>
  );
};

export default memo(Header);
