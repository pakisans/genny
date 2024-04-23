import { memo } from "react";
import ImageSliderAboutUs from "../slider/ImageSliderAboutUs";
import TextSlider from "../global/TextSlider";
import { sliderData } from "@/lib/data/aboutUsData";

const AboutUsPage = ({ aboutUsRef, images }) => {
  return (
    <section ref={aboutUsRef}>
      <div className="border-fade h-[.2rem] w-full mx-auto mt-[3rem] 2xl:mt-[5rem]"></div>
      <h1 className="text-[3.2rem] text-browno text-center mt-[2rem] mb-[1rem] font-bold">
        O NAMA
      </h1>
      <div className="w-full mt-10 flex flex-col xl:flex-row h-full relative">
        <ImageSliderAboutUs images={images} />

        <div className="mx-auto w-full md:w-[45%] mt-10 xl:mt-20">
          <TextSlider slides={sliderData} />
        </div>
      </div>
    </section>
  );
};

export default memo(AboutUsPage);
