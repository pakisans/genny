import { memo } from "react";
import ImageViewerKeramika from "../global/ImageViewerKeramika";
import CeramicFilters from "./ceramics/CeramicFilters";
import usePagination from "../hooks/usePagination";
import Pagination from "../layout/Pagination";

const dimenzijeTerms = [
  {
    id: 1,
    termId: 40,
    name: "600x1200mm",
    slug: "pa_velicina",
  },
  {
    id: 1,
    termId: 42,
    name: "750x1500mm",
    slug: "pa_velicina",
  },
];

const tipoviTerms = [
  {
    slug: "pa_tip-plocica",
    termId: 39,
    name: "Rustik",
  },
  {
    slug: "pa_tip-plocica",
    termId: 38,
    name: "Polirane glazirane",
  },
  {
    slug: "pa_tip-plocica",
    termId: 41,
    name: "Satenska cigla",
  },
  {
    slug: "pa_tip-plocica",
    termId: 43,
    name: "Granit",
  },
];

const KeramikaProductPage = ({ products, totalProducts }) => {
  const {
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    rowsPerPageOptions,
  } = usePagination();

  if (products?.length === 0) {
    return (
      <p className="text-white text-[2.4rem] mt-10 text-center">
        Nema dostupnih proizvoda za izabrani filter
      </p>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center sm:items-start sm:flex-row">
        <div className="w-full md:w-[20%] sm:mt-[4rem] border border-[#c09069] rounded-[.4rem] py-10 px-10">
          <p className="text-white text-center text-[1.6rem]">Tipovi</p>
          <div className="border-fade h-[.2rem] w-full mt-[2rem]"></div>

          <CeramicFilters
            attribute={"attribute"}
            attributeTerm={"attribute_term"}
            filters={tipoviTerms}
          />

          <p className="text-white text-center text-[1.6rem]">Dimenzije</p>
          <div className="border-fade h-[.2rem] w-full mt-[2rem]"></div>

          <CeramicFilters
            attribute={"attribute"}
            attributeTerm={"attribute_term"}
            filters={dimenzijeTerms}
          />

          {/* <button>Obriši filtere</button> */}
        </div>
        <div className="sm:w-[40%] lg:w-[70%] 3xl:w-[80%] flex flex-col sm:flex-wrap sm:flex-row items-center gap-[4rem] sm:ml-auto mt-[4rem]">
          {products.map((product, key) => {
            if (product.categories[0].slug === "keramika") {
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
                    product={product}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="xl:ml-[26%]">
        <Pagination
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          totalItems={totalProducts}
          rowsPerPageOptions={rowsPerPageOptions}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={setRowsPerPage}
        />
      </div>
    </>
  );
};

export default memo(KeramikaProductPage);
