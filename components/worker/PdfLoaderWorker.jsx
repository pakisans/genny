"use client";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import ChevronLeft from "../icons/ChevronLeft";
import Loader from "../layout/Loader";

const PdfLoaderWorker = ({ file, fileName }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pageSize, setPageSize] = useState({ width: 0, height: 300 });
  const pdfViewerRef = useRef(null);
  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
  }, []);

  const calculatePageSize = useCallback(
    (page) => {
      if (!page) return;

      if (isFullscreen) {
        const screenWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        const screenHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(
          screenWidth / viewport.width,
          screenHeight / viewport.height
        );
        setPageSize({
          width: viewport.width * scale,
          height: viewport.height * scale,
        });
      } else {
        const { width, height } = page.getViewport({ scale: 1 });
        const fixedHeight = 300;
        const scale = fixedHeight / height;
        setPageSize({ width: width * scale, height: fixedHeight });
      }
    },
    [isFullscreen]
  );

  const onRenderSuccess = useCallback(
    (page) => calculatePageSize(page),
    [calculatePageSize]
  );

  const updateSize = useCallback(() => {
    if (pdfViewerRef.current) {
      setPageSize((prevSize) => ({
        width: pdfViewerRef.current.clientWidth,
        height: prevSize.height,
      }));
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreenNow = Boolean(document.fullscreenElement);
      setIsFullscreen(isFullscreenNow);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("resize", updateSize);
    };
  }, [updateSize]);

  const changePage = useCallback((offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }, []);

  const goToPreviousPage = useCallback(
    () => pageNumber > 1 && changePage(-1),
    [pageNumber, changePage]
  );
  const goToNextPage = useCallback(
    () => pageNumber < numPages && changePage(1),
    [pageNumber, numPages, changePage]
  );

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      pdfViewerRef.current.requestFullscreen();
    }
  }, [isFullscreen]);

  if (!file) return null;

  return (
    <div
      ref={pdfViewerRef}
      className={`relative bg-transparent rounded-[.4rem] ${
        isFullscreen ? "fullscreen" : "no-fullscreen"
      }`}
    >
      <div className={`${isFullscreen ? "absolute top-20 z-[999999] " : ""}`}>
        {!isFullscreen ? (
          <p
            className={`text-white uppercase text-[1.8rem] leading-[2.4rem] font-semibold mb-[.5rem] ${
              isFullscreen ? "text-[3.2rem] leading-[2.4rem] !text-browno" : ""
            }`}
          >
            {fileName}
          </p>
        ) : null}
        {isFullscreen ? (
          <div className="border-fade h-[.3rem] w-full mx-auto mt-[.4rem]"></div>
        ) : null}
      </div>
      {!isFullscreen ? (
        <div className="border-fade h-[.2rem] w-full mx-auto my-8"></div>
      ) : null}

      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<Loader />}
        className="mx-auto hover:outer-glow-white bg-transparent"
      >
        <Page
          pageNumber={pageNumber}
          width={pageSize.width}
          className="bg-transparent transition-all duration-1000"
          height={isFullscreen ? undefined : pageSize.height}
          onRenderSuccess={onRenderSuccess}
          loading={<Loader />}
        />
      </Document>
      <div
        className={`absolute w-full bottom-0 ${
          isFullscreen ? "xl:left-20 justify-center" : "left-0"
        } xl:right-0 flex items-center p-4 bg-opacity-50 bg-white z-[999999] ${
          (isFullscreen ? "" : "", isFullscreen ? "gap-20" : "justify-between")
        }`}
      >
        <button
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          className="text-white button-effect"
          type="button"
        >
          <ChevronLeft width={30} height={30} />
        </button>
        <p
          className={`text-black font-bold ${
            isFullscreen ? "text-black text-[1.8rem] leading-[2.4rem]" : ""
          }`}
        >
          Stranica {pageNumber} od {numPages}
        </p>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="text-white button-effect cursor-pointer"
        >
          <ChevronLeft width={30} height={30} twStyles="rotate-180" />
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          className={`text-black border border-black px-10 py-5 rounded hover:text-browno hover:bg-black ${
            isFullscreen ? "text-[1.6rem] " : ""
          } `}
        >
          {isFullscreen ? "Izađi" : "Prikazi"}
        </button>
      </div>
    </div>
  );
};

export default memo(PdfLoaderWorker);
