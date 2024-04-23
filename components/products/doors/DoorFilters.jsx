import XIcon from "@/components/icons/XIcon";
import { useRouter, usePathname } from "next/navigation";
import { memo } from "react";

const DoorFilters = ({ filters, selectedSubCategory, selectedCategory }) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleFilterClick = (filter) => {
    if (selectedSubCategory?.id === filter.id) {
      router.push(`/proizvodi/vrata?category=${selectedCategory.id}`);
    } else {
      router.push(
        `/proizvodi/vrata/${filter.slug}?category=${selectedCategory.id}&subCategory=${filter.id}`
      );
    }
  };

  return (
    <div className="flex flex-col items-start ] gap-4 py-10">
      {filters?.map((filter, key) => (
        <div
          className="flex items-center mx-auto"
          key={`category-keramika-filter-${key}`}
        >
          <button
            aria-label="Filter name"
            type="button"
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 text-[1.2rem] rounded-md transition ${
              selectedSubCategory?.name == filter.name
                ? "text-browno"
                : "text-white"
            } hover:opacity-70`}
          >
            {filter.name}
          </button>
          {selectedSubCategory?.name == filter.name ? (
            <button
              aria-label="Close"
              type="button"
              onClick={() => handleFilterClick(filter)}
            >
              <XIcon width={10} height={10} color={"#fff"} />
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default memo(DoorFilters);
