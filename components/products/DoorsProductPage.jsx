import { memo, useState } from "react";
import DoorFilters from "./doors/DoorFilters";
import ImageViewerKeramika from "../global/ImageViewerKeramika";
import usePagination from "../hooks/usePagination";
import Pagination from "../layout/Pagination";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const DoorsProductPage = ({
  categories,
  totalProducts,
  products,
  subCategories,
  selectedCategory,
  selectedSubCategory,
}) => {
  const {
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    rowsPerPageOptions,
  } = usePagination();
  const [hideCategories, setHideCategories] = useState(false);

  const productsWithBrave = products.filter((product) =>
    product.name.toLowerCase().includes("brava")
  );
  const productsWithoutBrave = products
    .filter((product) => !product.name.toLowerCase().includes("brava"))
    .sort((a, b) => a.name.localeCompare(b.name));
  const sortedProducts = [...productsWithoutBrave, ...productsWithBrave];

  return (
    <>
      <div className="flex flex-col items-center sm:items-start sm:flex-row">
        <div
          className={`w-full md:w-[28%] xl:w-[20%] sm:mt-[4rem] lg:border border-[#c09069] rounded-[.4rem] py-10 px-10 transition-all duration-500 ease-in-out `}
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setHideCategories(!hideCategories)}
          >
            <p className="text-white text-[1.6rem]">Kategorije</p>
            <ChevronDownIcon
              width={16}
              height={16}
              color={"#fff"}
              styles={`transform transition-transform duration-500 ${
                hideCategories ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>
          <div
            className={`border-fade h-[.2rem] w-full mt-[2rem] transition-opacity duration-500`}
          ></div>
          {!hideCategories && (
            <DoorFilters
              filters={subCategories}
              selectedSubCategory={selectedSubCategory}
              selectedCategory={selectedCategory}
            />
          )}
        </div>
        <div className="sm:w-[80%] lg:w-[70%] 3xl:w-[80%] flex flex-col sm:flex-wrap sm:flex-row items-center gap-[4rem] sm:ml-auto mt-[4rem]">
          {sortedProducts.map((product, key) => {
            return (
              <div
                className="border border-gold"
                key={`produtct-${key}-${product.name}`}
              >
                <ImageViewerKeramika
                  twStyles={`w-[20rem] h-[38rem]`}
                  src={product.images[0].src}
                  alt={`${product.images[0].alt} model-${product.name}`}
                  productModel={product.name}
                  attributes={product.attributes}
                  description={product.description}
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

export default memo(DoorsProductPage);
