import { Fragment, memo } from "react";
import Pagination from "@/components/layout/Pagination";
import usePagination from "@/components/hooks/usePagination";
import Image from "next/image";
import { stripHtml } from "@/lib/utils/dataUtils";
import ImageCarouselWithThumb from "@/components/global/ImageCarouselWithThumb";
import { useCart } from "@/components/context/ShopCartContext";
import PlusIcon from "@/components/icons/PlusIcon";

const SanitaryProductPage = ({
  selectedSubCategory,
  productsRef,
  products,
  totalProducts,
}) => {
  const { addToCart } = useCart();
  const {
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    rowsPerPageOptions,
  } = usePagination();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  return selectedSubCategory ? (
    <section ref={productsRef}>
      <h3 className="text-browno text-[3.2rem] text-center pt-[4rem]">
        {selectedSubCategory?.name}
      </h3>
      {selectedSubCategory?.description ? (
        <p className="text-white opacity-70 text-[1.8rem] leading-[2.4rem] text-center max-w-[64rem] mx-auto mt-10">
          {selectedSubCategory?.description}
        </p>
      ) : null}
      <div className="flex flex-col items-center md:items-start xl:flex-row gap-5 mt-[2rem]">
        <div className="relative hidden sm:block w-full xl:w-[42%] h-[80rem]">
          <Image
            src={selectedSubCategory?.image.src}
            alt={selectedSubCategory?.image.alt}
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        </div>
        <div className="w-full xl:w-[50%] flex flex-col gap-10">
          {products && products.length > 0 && selectedSubCategory
            ? products.map((product, index) => {
                return (
                  <Fragment
                    key={`fragment-od-${selectedSubCategory.name}-${index}`}
                  >
                    <div
                      className="flex flex-col-reverse md:flex-row items-center gap-10"
                      key={`proizvod-od-${selectedSubCategory.name}-${index}`}
                    >
                      <ImageCarouselWithThumb images={product.images} />

                      <div className="flex flex-col gap-4 px-10 md:px-0 max-w-[40rem] md:max-w-none">
                        <p className="text-white text-[2rem] md:text-[2.6rem] leading-[3.2rem]">
                          Model:{product.name}
                        </p>
                        <p className="text-white text-[2rem] md:text-[2.6rem] leading-[3.2rem]">
                          {stripHtml(product.description)}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => handleAddToCart(e, product)}
                          aria-label="Dodavanje u korpu"
                          className="button-effect md:hidden mx-auto mt-10"
                        >
                          <PlusIcon width={30} height={30} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(e, product)}
                        aria-label="Dodavanje u korpu"
                        className="button-effect hidden md:block"
                      >
                        <PlusIcon width={30} height={30} />
                      </button>
                    </div>
                    <div
                      key={`linija-${selectedSubCategory.name}-${index}`}
                      className="border-fade h-[.2rem] w-full mx-auto"
                    ></div>
                  </Fragment>
                );
              })
            : null}
        </div>
      </div>
      {totalProducts >= 12 ? (
        <div className="mx-[3rem]">
          <Pagination
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            totalItems={totalProducts}
            rowsPerPageOptions={rowsPerPageOptions}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={setRowsPerPage}
            shouldScroll={false}
          />
        </div>
      ) : null}
    </section>
  ) : null;
};

export default memo(SanitaryProductPage);
