"use client";
import Link from "next/link";
import { memo, useRef } from "react";
import { KategorijaConst } from "@/lib/constants/kategorija.const";
import KeramikaProductPage from "./KeramikaProductPage";
import SubCategories from "./SubCategories";
import ProductOfSubCategory from "./ProductOfSubCategory";
import DoorsProductPage from "./DoorsProductPage";
import SanitaryProductPage from "./sanitary/SanitaryProductPage";
import ShowerCabinProductPage from "./ShowerCabinProductPage";
import SaunasProductPage from "./SaunasProductPage";

const ProductsPage = ({
  categories,
  categoryId,
  products,
  selectedCategory,
  totalProducts,
  subCategories,
  selectedSubCategory,
}) => {
  const productsRef = useRef();

  return (
    <>
      <div className="">
        <div className="flex flex-wrap gap-10 mt-[1rem] justify-center px-5 md:px-0">
          {categories.map((category, key) => {
            if (category.name == "Uncategorized") return;

            return (
              <Link
                className={`text-[1.4rem] xl:text-[1.6rem] uppercase font-semibold hover:scale-110 hover:opacity-60 ${
                  category.id == categoryId ? "!text-browno" : "text-white"
                }`}
                href={`/proizvodi/${category.slug}`}
                key={`category-${key}`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
        <div className="border-fade h-[.2rem] w-full mt-[2rem]"></div>
        {subCategories?.length > 0 &&
        subCategories &&
        selectedCategory?.slug !== KategorijaConst.VRATA ? (
          <SubCategories
            productsRef={productsRef}
            selectedCategory={selectedCategory}
            subCategories={subCategories}
          />
        ) : null}
        {selectedCategory?.slug !== KategorijaConst.VRATA &&
        selectedCategory?.slug !== KategorijaConst.TUS_KABINE ? (
          <div className="border-fade h-[.2rem] w-full mt-[2rem]"></div>
        ) : null}
        {subCategories?.length > 0 &&
        selectedSubCategory &&
        selectedCategory?.slug !== KategorijaConst.VRATA &&
        selectedCategory?.slug !== KategorijaConst.SANITARIJE ? (
          <ProductOfSubCategory
            totalProducts={totalProducts}
            productsRef={productsRef}
            selectedSubCategory={selectedSubCategory}
            products={products}
            selectedCategory={selectedCategory}
          />
        ) : null}
        {selectedCategory?.slug == KategorijaConst.KERAMIKA ? (
          <KeramikaProductPage
            totalProducts={totalProducts}
            products={products}
          />
        ) : null}
        {selectedCategory?.slug == KategorijaConst.VRATA ? (
          <DoorsProductPage
            categories={categories}
            totalProducts={totalProducts}
            products={products}
            subCategories={subCategories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
          />
        ) : null}
        {selectedCategory?.slug == KategorijaConst.TUS_KABINE ? (
          <ShowerCabinProductPage
            categories={categories}
            totalProducts={totalProducts}
            products={products}
            subCategories={subCategories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
          />
        ) : null}
        {selectedCategory?.slug == KategorijaConst.KADE ? (
          <ShowerCabinProductPage
            categories={categories}
            totalProducts={totalProducts}
            products={products}
            subCategories={subCategories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
          />
        ) : null}
        {selectedCategory?.slug == KategorijaConst.DJAKUZIJI ? (
          <SaunasProductPage
            categories={categories}
            totalProducts={totalProducts}
            products={products}
            subCategories={subCategories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
          />
        ) : null}
        {selectedCategory?.slug == KategorijaConst.SAUNE ? (
          <SaunasProductPage
            categories={categories}
            totalProducts={totalProducts}
            products={products}
            subCategories={subCategories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            productsRef={productsRef}
          />
        ) : null}
        {selectedCategory?.slug == KategorijaConst.SANITARIJE ? (
          <SanitaryProductPage
            categories={categories}
            totalProducts={totalProducts}
            products={products}
            subCategories={subCategories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            productsRef={productsRef}
          />
        ) : null}
      </div>
    </>
  );
};

export default memo(ProductsPage);
