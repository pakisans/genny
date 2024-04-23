import { useSearchParams } from "next/navigation";
import { useState } from "react";

const usePagination = () => {
  const searchParams = useSearchParams();
  const [rowsPerPage, setRowsPerPage] = useState(
    Number(searchParams.get("per_page")) || 12
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const rowsPerPageOptions = [10, 25, 50, 100];

  return {
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    rowsPerPageOptions,
  };
};

export default usePagination;
