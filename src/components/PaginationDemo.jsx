import React from "react";
import usePagination from "../hook/usePagination";
import { useState, useEffect } from "react";

const  totalItems = 123

 function PaginationDemo() {
  const [itemsPerPage, setItemsPerPage] =useState(10)

     const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    nextPage,
    prevPage,
    setPage,
    canNextPage,
    canPrevPage,
  } = usePagination({
    totalItems,
    itemsPerPage,
  });
 
  
  useEffect(() => {
    setPage(1);
  }, [itemsPerPage]);


  const items = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
  const currentItems = items.slice(startIndex, endIndex + 1);


  return (
    <>
      <div className="w-full  max-w-4xl bg-yellow-100 border  shadow-lg rounded-2xl p-6 border-black p-8 m-8">
        <h3 className="m-4 text-3xl md:text-3xl font-bold text-center mb-6">
          Pagination Demo
        </h3>
        <div >
          <div>
            <label htmlFor="itemsPerPageSelect">Items per page: </label>
            <select value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))} className="border border-black">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div >Total Items: {totalItems}</div>
        </div>

        {/*render current /item  */}
        <ul >
          {currentItems.map((item) => (
          <li
            key={item}
            className="border border-black p-2 m-2"
          >
            {item}
          </li>
        ))}
        </ul>

        <div className="border border-black p-4 m-4">
          <button disabled={!canPrevPage}
          onClick={prevPage}
           className="border border-black">
            Previous
          </button>

          <span>
            Page{" "}
            <input
              type="number"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => setPage(Number(e.target.value))}
              className="border border-black "
            />
            {""} of {totalPages}
          </span>

          <button 
          disabled = {!canNextPage}
          onClick={nextPage}
          className="border border-black">
            Next
            </button>
        </div>

        <div className="border border-black p-4 m-2">
          {Array.from({length: totalPages}, (_, i) => (
            <button 
            key={i}
            onClick={() => setPage(i+1)}
            
            disabled ={currentPage === i+1}
            >
              {i+1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default PaginationDemo;