"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "../global/Button";
import Select from "../global/Select";
import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";
import { useCallback } from "react";

const Pagination = ({
  currentPage,
  rowsPerPage,
  totalItems,
  rowsPerPageOptions,
  onPageChange,
  onRowsPerPageChange,
  page,
  shouldScroll = true,
}) => {
  const router = useRouter();
  const pageCount = Math.ceil(totalItems / rowsPerPage);
  const isLastPage = currentPage === pageCount;
  const firstItemIndex = (currentPage - 1) * rowsPerPage + 1;
  const lastItemIndex = Math.min(firstItemIndex + rowsPerPage - 1, totalItems);
  const searchParams = useSearchParams();
  const path = usePathname();

  const updateUrl = useCallback(
    (pageNumber, rows) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", pageNumber.toString());
      newSearchParams.set("per_page", rows.toString());
      const currentUrl = `${path}?${newSearchParams.toString()}`;
      router.push(currentUrl, { scroll: shouldScroll });
    },

    [path, router, searchParams, shouldScroll]
  );

  const goToPage = useCallback(
    (pageNumber) => {
      if (pageNumber >= 0 && pageNumber <= totalItems) {
        onPageChange(pageNumber);
        updateUrl(pageNumber, rowsPerPage);
      }
    },
    [onPageChange, rowsPerPage, totalItems, updateUrl]
  );

  const handleRowsPerPageChange = useCallback(
    (selectedOption) => {
      const newRowsPerPage =
        typeof selectedOption === "number"
          ? selectedOption
          : parseInt(selectedOption, 10);
      onRowsPerPageChange(newRowsPerPage);
      onPageChange(1);
      updateUrl(1, newRowsPerPage);
    },
    [onPageChange, onRowsPerPageChange, updateUrl]
  );

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-[3.1rem] pl-[1.3rem]">
      <div className="flex items-center">
        <span className="text-dark dark:text-white text-[1.4rem] leading-[2.4rem]">
          Prikaži
        </span>
        <Select
          options={rowsPerPageOptions}
          selectedOption={rowsPerPage}
          mainContainerClass="ml-8"
          onSelectOption={(option) => handleRowsPerPageChange(Number(option))}
          iconColor="#fff"
          optionContainerClass="w-fit"
          optionMainContainerClass="w-fit px-2 gap-5 cursor-pointer text-white bg-transparent border-white z-[999]"
          selectContainerClass="text-dark pl-[1.1rem] rounded-[.4rem] border border-white text-white"
        />
        <p className="ml-[1rem] text-[1.4rem] text-dark dark:text-white leading-[2.4rem]">
          {page}
        </p>
      </div>
      <div className="flex items-center mt-[2rem] sm:mt-0">
        <Button
          handleClick={() => goToPage(currentPage - 1)}
          aria={"Go to previous page"}
          icon={
            <LeftIcon styles={"fill-gold rotate-180"} width={24} height={24} />
          }
          disabled={currentPage === 1}
        />
        <div className="px-[.6rem] leading-[2.4rem] text-[1.2rem] bg-gold rounded-[.4rem] mx-[1rem]">
          {`${firstItemIndex}-${lastItemIndex} od ${totalItems}`}
        </div>
        <Button
          aria={"Go to next page"}
          handleClick={() => goToPage(currentPage + 1)}
          icon={
            <RightIcon styles={"fill-gold mt-[.8rem]"} width={24} height={24} />
          }
          disabled={isLastPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
