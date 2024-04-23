import { memo, useEffect, useRef, useState } from "react";
import { pdfjs } from "react-pdf";
import PdfLoaderWorker from "../worker/PdfLoaderWorker";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

const pdfTitles = [
  "Mermer i Kvarc",
  "Granit",
  "Tuš kabine",
  "Sanitarije",
  "Sanitarije",
  "Tuš kabine",
  "Slavine",
  "Đakuziji",
  "Podovi",
  "Podovi",
  "Tuš kabine",
  "Vrata",
  "Rasveta",
  "Vrata",
  "Pločice",
  "Granitne pločice",
];

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const KatalogPage = ({ katalogRef, homeData }) => {
  const pdfUrls = Object.values(homeData[0].acf);

  const isMobileDevice = () => {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (window.innerWidth <= 1024 && window.innerHeight <= 1024)
    );
  };

  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1);

  const onWheel = (e) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    if (isMobileDevice()) {
      return;
    }

    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer && !isHovering) {
        scrollContainer.scrollLeft += scrollDirection;
        if (
          scrollContainer.scrollWidth <=
          scrollContainer.scrollLeft + scrollContainer.offsetWidth
        ) {
          setScrollDirection(-1);
        } else if (scrollContainer.scrollLeft <= 0) {
          setScrollDirection(1);
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", onWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", onWheel);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, scrollDirection]);

  const pdfs = pdfUrls.map((url, index) => ({
    name: pdfTitles[index],
    file: url,
  }));

  return (
    <section
      ref={katalogRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="border-fade h-[.2rem] w-full mx-auto mt-[3rem] 2xl:mt-[5rem]"></div>
      <h1 className="text-[3.2rem] text-browno text-center mt-[2rem] mb-[1rem] font-bold">
        KATALOG
      </h1>
      <div className="w-full mt-[3rem] text-center xl:px-20">
        <div ref={scrollContainerRef} className="flex overflow-x-scroll gap-20">
          {pdfs.map((pdf, index) => (
            <PdfLoaderWorker
              key={`pdf-worker-${index}`}
              fileName={pdf.name}
              file={pdf.file}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(KatalogPage);
