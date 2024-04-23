import { memo } from "react";
import ProductViewerOfSubCategory from "../global/ProductViewerOfSubCategory";
import Pagination from "../layout/Pagination";
import usePagination from "../hooks/usePagination";

const ProductsOfSubCategory = ({
  selectedSubCategory,
  productsRef,
  products,
  totalProducts,
}) => {
  const {
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    rowsPerPageOptions,
  } = usePagination();

  return (
    <section ref={productsRef}>
      <h3 className="text-browno text-[3.2rem] text-center pt-[4rem]">
        {selectedSubCategory.name}
      </h3>
      {selectedSubCategory.description ? (
        <p className="text-white opacity-70 text-[1.8rem] leading-[2.4rem] text-center max-w-[64rem] mx-auto mt-10">
          {selectedSubCategory.description}
        </p>
      ) : null}
      <div
        className={`w-full xl:w-fit flex flex-col sm:flex-wrap justify-center sm:flex-row items-center gap-[4rem] mt-[4rem] ${
          products.length < 4 ? "mx-auto" : "xl:mx-[4rem]"
        }`}
      >
        {products && products.length > 0 && selectedSubCategory
          ? products.map((product, index) => {
              return (
                <div
                  className="border border-gold"
                  key={`proizvod-od-${selectedSubCategory.name}-${index}`}
                >
                  <ProductViewerOfSubCategory
                    twStyles={`w-[30rem] h-[38rem]`}
                    src={product.images[0].src}
                    alt={`${product.images[0].alt} model-${product.name}`}
                    productModel={product.name}
                    description={product.description}
                    images={product?.images}
                    product={product}
                  />
                </div>
              );
            })
          : null}
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
  );
};

export default memo(ProductsOfSubCategory);
