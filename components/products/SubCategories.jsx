import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { memo, useCallback, useEffect, useState } from "react";

const SubCategories = ({ subCategories, selectedCategory, productsRef }) => {
  const [scrollCount, setScrollCount] = useState(0);
  const params = useSearchParams();
  const scrollToTarget = useCallback((refValue) => {
    if (refValue.current) {
      refValue.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const currentPage = params.get("page");
  useEffect(() => {
    if (productsRef.current) {
      scrollToTarget(productsRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollCount, currentPage]);

  return (
    <section className="w-full flex flex-wrap gap-10 mt-10 justify-center">
      {subCategories.map((subCategory, index) => {
        return (
          <Link
            href={`/proizvodi/${selectedCategory.slug}/${subCategory.slug}`}
            key={`${subCategory.name}-${subCategory.id}-${index}`}
            className="flex flex-col w-full xsm:w-auto"
            scroll={false}
            onClick={() => setScrollCount(scrollCount + 1)}
          >
            <div className="border-fade h-[.2rem] w-full xsm:w-[30rem] mx-auto mb-6"></div>
            <div className="w-full xsm:w-[30rem] h-[40rem] relative bg-[linear-gradient(to_bottom,#e6c299,#cfab7a,#b2895e,#8b6b4a,#6c4a3b)] p-[.4rem] rounded-[.1rem] cursor-pointer flex flex-col">
              <div className="relative w-full h-full bg-gradient-to-t from-black to-darkgrey ">
                <Image
                  key={subCategory.image?.src}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  alt={subCategory.image?.alt}
                  src={subCategory.image?.src}
                  sizes="(min-width: 808px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="flex justify-center items-center border border-yellow-50 min-h-[8.6rem]">
              <h2 className="text-[2rem] leading-[3.2rem] max-w-[30rem] text-white text-center button-effect cursor-pointer hover:text-gold uppercase">
                {subCategory.name}
              </h2>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default memo(SubCategories);
