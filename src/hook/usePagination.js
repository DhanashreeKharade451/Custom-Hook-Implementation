function usePagination( totalItems, itemsPerPage, initialPage){

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