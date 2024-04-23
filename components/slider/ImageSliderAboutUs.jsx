"use client";
import { useState, useEffect, memo, useRef } from "react";
import Image from "next/image";

const ImageSliderAboutUs = ({ images, interval = 6000 }) => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      if (current < images.length) {
        setCurrent(current + 1);
        sliderRef.current.style.transition = "transform 4s ease-in-out";
      } else {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translate3d(0, 0, 0)`;

        sliderRef.current.offsetWidth;

        sliderRef.current.style.transition = "transform 4s ease-in-out";
        setCurrent(1);
      }
    }, interval);

    return () => clearTimeout(id);
  }, [current, images.length, interval]);

  return (
    <div className="relative overflow-hidden xl:block w-full h-[30rem] xl:w-[49%] md:h-[49.1rem] 2xl:w-[115rem] 2xl:h-[57rem] rounded-[.4rem] z-0">
      <div
        ref={sliderRef}
        className="flex w-full h-full"
        style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
      >
        {images.concat(images[0]).map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <Image
              src={image.src}
              alt={`Slide ${index}`}
              fill
              style={{
                objectFit: "cover",
              }}
              priority={index === 0}
              sizes="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ImageSliderAboutUs);
