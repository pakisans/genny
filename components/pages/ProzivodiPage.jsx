import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const ProizvodiPage = ({ productsRef, categories }) => {
  const filteredCategories = categories.filter((category) => category.image);
  return (
    <section ref={productsRef} id="proizvodi-page" className="h-full pb-[2rem]">
      <div className="border-fade h-[.2rem] w-full mx-auto mt-[3rem] 2xl:mt-[5rem]"></div>
      <h1 className="text-[3.2rem] text-browno text-center mt-[2rem] mb-[1rem] font-bold">
        PROIZVODI
      </h1>
      <div className="flex flex-col xl:flex-row items-center justify-center flex-wrap xl:gap-20">
        {filteredCategories.map((category, key) => {
          if (category.name == "Vrata") return;
          return (
            <Link
              href={`/proizvodi/${category.slug}`}
              key={`${category.name}-${category.id}-${key}`}
              className="flex flex-col w-full xsm:w-auto"
            >
              <div className="border-fade h-[.2rem] w-full xsm:w-[30rem] mx-auto mb-6"></div>
              <div className="w-full xsm:w-[30rem] h-[40rem] relative bg-[linear-gradient(to_bottom,#e6c299,#cfab7a,#b2895e,#8b6b4a,#6c4a3b)] p-[.4rem] rounded-[.1rem] cursor-pointer flex flex-col">
                <div className="relative w-full h-full bg-gradient-to-t from-black to-darkgrey ">
                  <Image
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    alt={`kategorija slika-${key}`}
                    src={category.image?.src}
                    sizes="100%"
                  />
                </div>
              </div>
              <div className="py-[1rem] border border-yellow-50">
                <h2 className="text-[2.6rem] leading-[3.8rem] text-white text-center button-effect cursor-pointer hover:text-gold uppercase">
                  {category.name}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default memo(ProizvodiPage);
