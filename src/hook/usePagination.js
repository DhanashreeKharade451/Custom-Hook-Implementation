import { useState, useMemo, useCallback } from "react";

function usePagination( {
    totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}){

    const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const [currentPage, setCurrentPage] = useState(
    Math.min(Math.max(initialPage, 1), totalPages)
  );

  const setPage = useCallback(
    (page) => {
      const safePage = Math.min(Math.max(page, 1), totalPages);
      setCurrentPage(safePage);
    },
    [totalPages]
  );

  const nextPage = useCallback(() => {
    setPage(currentPage + 1);
  }, [currentPage, setPage]);

 const startIndex = useMemo(() => {
    return (currentPage - 1) * itemsPerPage;
  }, [currentPage, itemsPerPage]);

  const endIndex = useMemo(() => {
    return Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
  }, [startIndex, itemsPerPage, totalItems]);

   const itemsOnCurrentPage = useMemo(() => {
    if (totalItems === 0) return 0;
    return endIndex - startIndex + 1;
  }, [startIndex, endIndex, totalItems]);

  const canNextPage = currentPage < totalPages;
  const canPrevPage = currentPage > 1;


    return {
         currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
    };   
    
} 
export default usePagination;