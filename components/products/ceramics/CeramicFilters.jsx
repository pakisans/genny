import XIcon from "@/components/icons/XIcon";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { memo, useCallback, useMemo } from "react";

const useFilterState = (attribute, attributeTerm) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedFilters = useMemo(() => {
    const attributeTerms = searchParams.get(attributeTerm);
    return attributeTerms ? attributeTerms.split(",") : [];
  }, [searchParams, attributeTerm]);

  const handleFilterClick = useCallback(
    (slug, atrTerm) => {
      const currentAttribute = searchParams.get(attribute);
      const isSameAttribute = currentAttribute === slug;
      const isAlreadySelected = selectedFilters.includes(String(atrTerm));

      let updatedFilters;
      if (isSameAttribute) {
        updatedFilters = isAlreadySelected
          ? selectedFilters.filter((term) => term !== String(atrTerm))
          : [...selectedFilters, atrTerm];
      } else {
        updatedFilters = [atrTerm];
      }

      if (updatedFilters.length > 0) {
        const newQueryString = `${attribute}=${slug}&${attributeTerm}=${updatedFilters.join(
          ","
        )}`;
        router.push(`${pathname}?category=23&${newQueryString}`, undefined, {
          shallow: true,
        });
      } else {
        router.push(`${pathname}?category=23`, undefined, {
          shallow: true,
        });
      }
    },
    [selectedFilters, pathname, router, searchParams, attribute, attributeTerm]
  );

  return { selectedFilters, handleFilterClick };
};

const CeramicFilters = ({ filters, attribute, attributeTerm }) => {
  const { selectedFilters, handleFilterClick } = useFilterState(
    attribute,
    attributeTerm
  );

  const isFilterSelected = (atrTerm) =>
    selectedFilters.includes(String(atrTerm));

  return (
    <div className="flex flex-col items-start ] gap-4 py-10">
      {filters.map((filter, key) => (
        <div
          className="flex items-center"
          key={`category-keramika-filter-${key}`}
        >
          <button
            aria-label="Filter name"
            type="button"
            onClick={() => handleFilterClick(filter.slug, filter.termId)}
            className={`px-4 py-2 text-[1.2rem] rounded-md transition ${
              isFilterSelected(filter.termId) ? "text-browno" : "text-white"
            } hover:opacity-70`}
          >
            {filter.name}
          </button>
          {isFilterSelected(filter.termId) ? (
            <button
              aria-label="Close"
              type="button"
              onClick={() => handleFilterClick(filter.slug, filter.termId)}
            >
              <XIcon width={10} height={10} color={"#fff"} />
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default memo(CeramicFilters);
