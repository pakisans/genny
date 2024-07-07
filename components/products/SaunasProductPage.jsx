import { memo, useState } from "react";
import usePagination from "../hooks/usePagination";
import Pagination from "../layout/Pagination";
import ImageViewerKeramika from "../global/ImageViewerKeramika";

const SaunasProductPage = ({ totalProducts, products }) => {
  const {
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    rowsPerPageOptions,
  } = usePagination();

  return (
    <>
      <div className="flex flex-col items-center sm:items-start sm:flex-row">
        <div className="w-full justify-center flex flex-col sm:flex-wrap sm:flex-row items-center gap-[4rem] sm:ml-auto mt-[4rem]">
          {products.map((product, key) => {
            return (
              <div
                className="border border-gold"
                key={`produtct-${key}-${product.name}`}
              >
                <ImageViewerKeramika
                  twStyles={`w-[30rem] h-[40rem]`}
                  src={product.images[0].src}
                  alt={`${product.images[0].alt} model-${product.name}`}
                  productModel={product.name}
                  attributes={product.attributes}
                  description={product.description}
                  twStylesDescription={"text-center"}
                  product={product}
                  noFull={true}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="xl:ml-[26%]">
        {totalProducts > 12 ? (
          <Pagination
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            totalItems={totalProducts}
            rowsPerPageOptions={rowsPerPageOptions}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={setRowsPerPage}
          />
        ) : null}
      </div>
    </>
  );
};

export default memo(SaunasProductPage);
