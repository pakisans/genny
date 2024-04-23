import { memo, useCallback, useEffect, useState } from "react";

const CartTextSlider = ({ slides, active, onHover }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActiveIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    let timer;
    if (active) {
      timer = setInterval(() => {
        setActiveIndex((current) => (current + 1) % slides.length);
      }, 8000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [active, slides.length]);

  return (
    <div
      className={`flex flex-col w-full items-center ${
        active ? "opacity-100" : "lg:opacity-50 lg:blur"
      }`}
      onMouseEnter={onHover}
    >
      <div className="w-full relative min-h-[30rem] xsm:min-h-[20rem] xl:max-w-[50rem] mx-auto xl:h-full my-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: `${index === activeIndex ? "500ms" : "0ms"}`,
            }}
          >
            <h2 className="text-left text-white opacity-70 font-bold text-[2.2rem] md:text-[2.4rem] leading-[3.2rem] mb-10">
              {slide.title}
            </h2>
            <p className="text-[1.6rem] text-white opacity-70 md:text-[1.8rem]">
              {slide.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Change slide ${index + 1}`}
            onClick={() => handleSetActiveIndex(index)}
            className={`h-6 w-6 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(CartTextSlider);
