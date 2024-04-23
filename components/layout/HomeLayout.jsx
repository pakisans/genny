"use client";
import LinkButton from "@/components/global/LinkButton";
import ImageSlider from "@/components/slider/ImageSlider";
import dynamic from "next/dynamic";
import Image from "next/image";
import { memo, useCallback, useRef } from "react";
import Loader from "./Loader";

const ProizvodiPage = dynamic(
  () => import("@/components/pages/ProzivodiPage"),
  {
    loading: () => <Loader />,
  }
);

const KatalogPage = dynamic(() => import("@/components/pages/KatalogPage"), {
  loading: () => <Loader />,
});
const AboutUs = dynamic(() => import("@/components/pages/AboutUsPage"), {
  loading: () => <Loader />,
});

// eslint-disable-next-line react/display-name
const HomeLayout = memo(({ categories, homeData, homeImages }) => {
  const productsRef = useRef(null);
  const katalogRef = useRef(null);
  const aboutUsRef = useRef(null);
  const homeImage = homeImages[0]?.acf;
  const images = Object.keys(homeImage)
    .filter((key) => key.startsWith("image_slider"))
    .map((key) => ({
      src: homeImage[key],
    }));

  const scrollToTarget = (refValue) => {
    refValue.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFooter = useCallback(() => {
    const footerId = document.getElementById("footer");
    if (footerId) {
      footerId.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="flex items-center flex-col md:flex-row justify-center gap-20 xl:justify-between xl:gap-0 w-full">
        <div className="flex flex-col gap-10 w-full xsm:w-auto">
          <div className="w-full xsm:w-[30rem] h-[16rem] 2xl:h-[20rem] relative bg-[linear-gradient(to_bottom,#e6c299,#cfab7a,#b2895e,#8b6b4a,#6c4a3b)] p-[.4rem]  cursor-pointer flex flex-col">
            <div className="relative w-full h-full bg-gradient-to-t from-black to-darkgrey ">
              <Image
                fill
                style={{
                  objectFit: "cover",
                }}
                alt="mermer kupatilo"
                src={homeImage.firstimage}
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </div>
          </div>
          <LinkButton
            href={"/proizvodi/keramika"}
            text={"Keramika"}
            styles={
              "w-fit px-[2rem] py-[1rem] relative text-[1.4rem] text-white border-[.3rem] border-[#c09069] text-[#c09069] mx-auto uppercase hover:outer-glow rounded-[.1rem]"
            }
          />

          <div className="w-full xsm:w-[30rem] h-[16rem] 2xl:h-[20rem] relative border-[.3rem] border-[#c09069] cursor-pointer">
            <Image
              fill
              style={{
                objectFit: "cover",
              }}
              alt="podovi"
              src={homeImage.third_image}
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
          <LinkButton
            href={"/proizvodi/podovi"}
            text={"PODOVI"}
            styles={
              "w-fit px-[2rem] py-[1rem] relative text-[1.4rem] text-white border-[.3rem] border-[#c09069] text-[#c09069] mx-auto uppercase hover:outer-glow rounded-[.1rem]"
            }
          />
        </div>
        <ImageSlider images={images} />
        <div className="flex flex-col gap-10 w-full xsm:w-auto">
          <div className="w-full xsm:w-[30rem] h-[16rem] 2xl:h-[20rem] relative border-[.3rem] border-[#c09069] cursor-pointer flex flex-col">
            <Image
              fill
              style={{
                objectFit: "cover",
              }}
              alt="mermer"
              src={homeImage.second_image}
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
          <LinkButton
            href={"/proizvodi/vrata"}
            text={"VRATA"}
            styles={
              "w-fit px-[2rem] py-[1rem] relative text-[1.4rem] text-white border-[.3rem] border-[#c09069] text-[#c09069] mx-auto uppercase hover:outer-glow rounded-[.1rem]"
            }
          />
          <div className="w-full xsm:w-[30rem] h-[16rem] md:auto 2xl:h-[20rem] relative border-[.3rem] border-[#c09069] cursor-pointer flex flex-col">
            <Image
              fill
              style={{
                objectFit: "cover",
              }}
              alt="sanitarije"
              src={homeImage.fourth_image}
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
          <LinkButton
            href={"/proizvodi/sanitarije"}
            text={"Sanitarije"}
            styles={
              "w-fit px-[2rem] py-[1rem] relative text-[1.4rem] text-white border-[.3rem] border-[#c09069] text-[#c09069] mx-auto uppercase hover:outer-glow rounded-[.1rem]"
            }
          />
        </div>
      </div>
      <div className="border-fade h-[.2rem] w-full mx-auto mt-[2rem] z-[9999]"></div>
      <div className="flex gap-20 xl:gap-0 flex-col items-center xl:flex-row justify-center xl:justify-between mt-[2rem] 2xl:mt-[4rem]">
        <section className="flex flex-col text-center xl:pl-[2rem]">
          <h1 className="text-white text-[2.6rem] xl:text-[2rem] leading-[2.4rem] 2xl:text-[2.4rem] pb-[1rem] font-semibold px-[2rem]">
            PROIZVODI
          </h1>
          <p className="text-decorativeText leadinig-[2rem] max-w-[32rem] 2xl:max-w-[35rem] text-center text-[1.6rem] 2xl:text-[1.8] mt-[.5rem] mb-[1rem] min-h-[9rem] 2xl:mb-[1rem] 2xl:min-h-[9rem]">
            Otkrijte naš širok asortiman vrhunskih proizvoda: od savremenih
            sigurnosnih vrata, preko keramičkih pločica, do inovativnih rešenja
            za stambeni prostor.
          </p>
          <button
            aria-label="Pogledaj"
            type="button"
            onClick={() => scrollToTarget(productsRef)}
            className="text-browno text-[1.6rem] py-[1rem] px-[2rem] border border-lightBeige mt-[2rem] xl:mt-0 rounded-full button-effect hover:scale-110"
          >
            POGLEDAJ
          </button>
        </section>
        <section className="flex flex-col text-center">
          <h1 className="text-white text-[2.6rem] xl:text-[2rem] leading-[2.4rem] 2xl:text-[2.4rem] pb-[1rem] font-semibold px-[2rem]">
            KATALOG
          </h1>
          <p className="text-decorativeText leadinig-[2rem] max-w-[32rem] 2xl:max-w-[35rem] text-center text-[1.6rem] 2xl:text-[1.8] mt-[.5rem] mb-[1rem] min-h-[9rem] 2xl:mb-[1rem] 2xl:min-h-[9rem]">
            Pregledajte našu bogatu kolekciju kroz interaktivne kataloge.
            Detaljni prikaz proizvoda vodiće vas kroz raznolikost i
            funkcionalnost našeg asortimana.
          </p>
          <button
            aria-label="POGLEDAJ"
            type="button"
            onClick={() => scrollToTarget(katalogRef)}
            className="text-browno text-[1.6rem] py-[1rem] px-[2rem] border border-lightBeige mt-[2rem] xl:mt-0 rounded-full button-effect hover:scale-110"
          >
            POGLEDAJ
          </button>
        </section>

        <section className="flex flex-col text-center">
          <h1 className="text-white text-[2.6rem] xl:text-[2rem] leading-[2.4rem] 2xl:text-[2.4rem] pb-[1rem] font-semibold px-[2rem]">
            O NAMA
          </h1>
          <p className="text-decorativeText leadinig-[2rem] max-w-[32rem] 2xl:max-w-[35rem] text-center text-[1.6rem] 2xl:text-[1.8] mt-[.5rem] mb-[1rem] min-h-[9rem] 2xl:mb-[1rem] 2xl:min-h-[9rem]">
            Saznajte više o našoj posvećenosti kvalitetu i inovacijama. Naša
            priča, misija i vrednosti odražavaju se u svakom proizvodu koji
            izlazi iz fabrike.
          </p>
          <button
            aria-label="POGLEDAJ"
            onClick={() => scrollToTarget(aboutUsRef)}
            type="button"
            className="text-browno text-[1.6rem] py-[1rem] px-[2rem] border border-lightBeige mt-[2rem] xl:mt-0 rounded-full button-effect hover:scale-110"
          >
            POGLEDAJ
          </button>
        </section>
        <section className="flex flex-col text-center xl:pr-[2rem]">
          <h1 className="text-white text-[2.6rem] xl:text-[2rem] leading-[2.4rem] 2xl:text-[2.4rem] pb-[1rem] font-semibold px-[2rem]">
            KONTAKT
          </h1>
          <p className="text-decorativeText leadinig-[2rem] max-w-[32rem] 2xl:max-w-[35rem] text-center text-[1.6rem] 2xl:text-[1.8] mt-[.5rem] mb-[1rem] min-h-[9rem] 2xl:mb-[1rem] 2xl:min-h-[9rem]">
            Za sva pitanja i informacije, naš tim je tu za vas. Kontaktirajte
            nas putem telefona, e-pošte ili posetite naše prostorije. Radujemo
            se saradnji.
          </p>
          <button
            aria-label="POGLEDAJ"
            onClick={() => scrollToFooter()}
            type="button"
            className="text-browno text-[1.6rem] py-[1rem] px-[2rem] border border-lightBeige mt-[2rem] xl:mt-0 rounded-full button-effect hover:scale-110"
          >
            POGLEDAJ
          </button>
        </section>
      </div>
      <ProizvodiPage categories={categories} productsRef={productsRef} />
      <KatalogPage homeData={homeData} katalogRef={katalogRef} />
      <AboutUs images={images} aboutUsRef={aboutUsRef} />
    </>
  );
});

export default HomeLayout;
