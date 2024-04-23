import Image from "next/image";
import { memo, useState } from "react";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

const ImageCarouselWithThumb = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-fit h-full">
      <div className="flex overflow-hidden relative  w-[35rem] h-[35rem]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            } ${
              isHovered ? "transform-gpu" : "scale-100"
            } transform transition-transform duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
        ))}
        {images.length > 1 && (
          <>
            <button
              onClick={() => handleImageNavigation("prev")}
              className="absolute left-2 z-20 top-1/2 transform -translate-y-1/2"
            >
              <LeftArrowIcon width={30} height={30} color="#FFF" />
            </button>
            <button
              onClick={() => handleImageNavigation("next")}
              className="absolute right-2 z-20 top-1/2 transform -translate-y-1/2"
            >
              <RightArrowIcon width={30} height={30} color="#FFF" />
            </button>
          </>
        )}
      </div>
      <div className="flex justify-center mt-2 gap-2">
        {images.map((thumb, index) => (
          <div
            key={index}
            className={`w-[10rem] h-[10rem] relative overflow-hidden cursor-pointer ${
              currentIndex === index ? "border-[.5rem] border-gold" : ""
            }`}
            onMouseEnter={() => setCurrentIndex(index)}
          >
            <Image
              src={thumb.src}
              alt={thumb.alt}
              fill
              className="object-cover"
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ImageCarouselWithThumb);
