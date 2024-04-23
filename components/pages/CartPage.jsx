"use client";
import { Fragment, memo, useCallback, useState } from "react";
import { useCart } from "../context/ShopCartContext";
import ImageCarousel from "../global/ImageCarousel";
import ShopCartRemoveIcon from "../icons/ShopCartRemoveIcon";
import CartForm from "../forms/CartForm";
import CartTextSlider from "../cart/CartTextSlider";
import { cartSliderData, cartSliderWhyData } from "@/lib/data/cartSliderData";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [artikalPodaci, setArtikalPodaci] = useState(
    cartItems.map((item) => ({
      id: item.id,
      kolicina: "",
      kvadratura: "",
      name: item.name,
      category: item.categories[0].name,
    }))
  );
  const [activeSlider, setActiveSlider] = useState(1);

  const handleMouseEnter = (sliderNumber) => {
    setActiveSlider(sliderNumber);
  };

  const handleArtikalChange = (id, type, value) => {
    setArtikalPodaci((prevState) =>
      prevState.map((artikal) =>
        artikal.id === id ? { ...artikal, [type]: value } : artikal
      )
    );
  };

  return (
    <section>
      <h1 className="text-center text-browno text-[3.2rem]">Moj Izbor</h1>
      <div className="border-fade h-[.2rem] mt-[1rem] w-full mx-auto"></div>
      <div className="flex flex-col lg:flex-row lg:items-center w-full mt-10">
        <div
          className={`w-full xl:w-[50%] p-10 transition-opacity duration-1000 ${
            activeSlider == 1 ? "opacity-100" : "lg:opacity-50 lg:blur"
          }`}
        >
          <p className="text-center text-[3.2rem] text-browno">
            Kako funkcioniše Moj Izbor?
          </p>
          <CartTextSlider
            slides={cartSliderData}
            active={activeSlider === 1}
            onHover={() => handleMouseEnter(1)}
          />
        </div>
        <div className="border-fade-b w-[.1rem] h-[30rem] hidden lg:block"></div>
        <div className="border-fade h-[.2rem] mt-[1rem] w-full lg:hidden mx-auto"></div>

        <div
          className={`w-full xl:w-[50%] p-10 transition-opacity duration-1000 ${
            activeSlider == 2 ? "opacity-100" : "lg:opacity-50 lg:blur"
          }`}
        >
          <p className="text-center text-[3.2rem] text-browno">
            Zašto Moj Izbor?
          </p>

          <CartTextSlider
            active={activeSlider === 2}
            slides={cartSliderWhyData}
            onHover={() => handleMouseEnter(2)}
          />
        </div>
      </div>
      <div className="border-fade h-[.2rem] mt-[1rem] w-full mx-auto"></div>

      <div className="flex flex-col xl:px-[12rem] mt-[2rem]">
        {cartItems.map((item, index) => {
          const artikal = artikalPodaci.find((art) => art.id === item.id);
          return (
            <Fragment key={`fragment-proizvod-${index}`}>
              <div
                className="w-full flex flex-col xl:flex-row items-center gap-10"
                key={`korpa-proizvod-${index}`}
              >
                <ImageCarousel images={item.images} />
                <div className="flex flex-col gap-5">
                  <p className="text-white text-[1.8rem] leading-[2.4rem]">
                    Model:<strong>{item.name}</strong>
                  </p>
                  <p className="text-white text-[1.8rem] leading-[2.4rem] text-left">
                    {item.categories[0].name}
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-end gap-4">
                    <label className="text-white text-[1.5rem] min-w-[8.33rem]">
                      količina
                    </label>
                    <input
                      type="number"
                      value={artikal?.kolicina || ""}
                      onChange={(e) =>
                        handleArtikalChange(item.id, "kolicina", e.target.value)
                      }
                      className="bg-transparent border-b border-gold outline-none text-white max-w-[5rem] text-[1.6rem] mb-2"
                    />
                  </div>
                  <div className="flex items-end gap-4">
                    <label className="text-white text-[1.5rem] min-w-[8.33rem]">
                      kvadratura
                    </label>
                    <input
                      type="number"
                      value={artikal?.kvadratura || ""}
                      onChange={(e) =>
                        handleArtikalChange(
                          item.id,
                          "kvadratura",
                          e.target.value
                        )
                      }
                      className="bg-transparent border-b border-gold outline-none text-white max-w-[5rem] text-[1.6rem] mb-2"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Obrisi iz mog izbora"
                  className="button-effect mx-auto lg:ml-auto mb-10 xl:mb-0"
                  onClick={() => removeFromCart(item.id)}
                >
                  <ShopCartRemoveIcon width={30} height={30} />
                </button>
              </div>
              <div
                key={`ivica-proizvoda-${index}`}
                className="border-fade h-[.2rem] mt-[1rem] w-full mx-auto"
              ></div>
            </Fragment>
          );
        })}

        {cartItems?.length > 0 ? (
          <CartForm artikalPodaci={artikalPodaci} />
        ) : null}
      </div>
    </section>
  );
};

export default memo(CartPage);
