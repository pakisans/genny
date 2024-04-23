import { memo, useEffect, useState } from "react";

const TextSlider = ({ slides, interval = 11000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesLen = slides.length;

  useEffect(() => {
    const tick = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => clearInterval(tick);
  }, [slides.length, activeIndex, interval]);

  const scrollToFooter = () => {
    const footerId = document.getElementById("footer");
    if (footerId) {
      footerId.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[44rem] xl:max-w-[50rem] mx-auto xl:h-full">
      <div className="border-fade-b w-[.1rem] h-[35rem]"></div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 pl-10 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: `${index === activeIndex ? "500ms" : "0ms"}`,
          }}
        >
          <h2 className="text-left font-bold text-white mb-10 text-[2.2rem] md:text-[3.2rem] leading-[3.6rem] opacity-90">
            {slide.title}
          </h2>
          <p className="text-left font-normal text-white text-[1.6rem] md:text-[2.2rem] opacity-70">
            {slide.text}
          </p>
          {index === slidesLen - 1 ? (
            <div className="flex items-center mt-10">
              <button
                type="button"
                aria-label="Scroll to footer"
                onClick={() => scrollToFooter()}
                className="border text-[1.6rem] border-browno py-5 px-5 ml-auto text-browno hover:text-gold hover:scale-110"
              >
                Tu smo za vas!
              </button>
            </div>
          ) : null}
        </div>
      ))}

      <div className="absolute bottom-0 xl:bottom-[5rem] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            type="button"
            aria-label="Change slide"
            key={index}
            className={`h-5 w-5 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(TextSlider);
