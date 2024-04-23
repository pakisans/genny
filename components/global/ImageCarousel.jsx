import Image from "next/image";
import { memo, useState } from "react";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

const ImageCarousel = ({ images }) => {
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

  return (
    <div className="relative w-fit">
      <div className="flex overflow-hidden relative w-[30rem] h-[30rem] md:h-[40rem] md:w-[40rem]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity h-full w-full duration-500 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(min-width: 808px) 50vw, 100vw"
            />
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
        ))}
      </div>
    </div>
  );
};

export default memo(ImageCarousel);
