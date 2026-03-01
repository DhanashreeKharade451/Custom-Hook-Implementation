import React from "react";
import usePagination from "../hook/usePagination";

const  totalItems = 123

 function PaginationDemo() {

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
    itemsPerPage: 10,
  });

  const items = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
  const currentItems = items.slice(startIndex, endIndex + 1);


  return (
    <>
      <div className="bg-yellow-100 border border-black p-8 m-8">
        <h3 className="m-4 text-3xl">
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
          <button className="border border-black">Next</button>
        </div>
        <div className="border border-black p-4 m-2">
          Showing items 1 - 10 (Total on this page: 10)
        </div>
        <div className="margin-top: 10px; text-align: center; display: flex; flex-wrap: wrap; justify-content: center; gap: 5px;">
          <button
            disabled=""
            className="border border-black "
          >
            1
          </button>
          <button className="border border-black ">
            2
          </button>
          <button className="border border-black ">
            3
          </button>
          <button className="border border-black ">
            4
          </button>
          <button className="border border-black ">
            5
          </button>
          <button className="border border-black ">
            6
          </button>
          <button className="border border-black ">
            7
          </button>
          <button className="border border-black ">
            8
          </button>
          <button className="border border-black ">
            9
          </button>
          <button className="border border-black ">
            10
          </button>
          <button className="border border-black ">
            11
          </button>
          <button className="border border-black ">
            12
          </button>
          <button className="border border-black ">
            13
          </button>
        </div>
      </div>
    </>
  );
}

export default PaginationDemo;