import React from "react";
import usePagination from "../hook/usePagination";

export function PaginationDemo({
  totalItems,
 itemsPerPage = 10,
 initialPage =1,
    }) {

      const totalPages = useMemo (() => {
        return Math.max(1,Math.ceil(totalItems/itemsPerPage));
      },[totalItems, itemsPerPage]);

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

  return (
    <>
      <div className="bg-yellow-100 border border-black p-8 m-8">
        <h3 className="m-4 text-3xl">
          Pagination Demo
        </h3>
        <div >
          <div>
            <label htmlFor="itemsPerPageSelect">Items per page: </label>
            <select id="itemsPerPageSelect" className="border border-black">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div >Total Items: 123</div>
        </div>
        <ul >
          <li className="border border-black p-2 m-2">Item 1</li>
          <li className="border border-black p-2 m-2">Item 2</li>
          <li className="border border-black p-2 m-2">Item 3</li>
          <li className="border border-black p-2 m-2">Item 4</li>
          <li className="border border-black p-2 m-2">Item 5</li>
          <li className="border border-black p-2 m-2">Item 6</li>
          <li className="border border-black p-2 m-2">Item 7</li>
          <li className="border border-black p-2 m-2">Item 8</li>
          <li className="border border-black p-2 m-2">Item 9</li>
          <li className="border border-black p-2 m-2">Item 10</li>
        </ul>
        <div className="border border-black p-4 m-4">
          <button disabled="" className="border border-black">
            Previous
          </button>
          <span>
            Page{" "}
            <input
              min="1"
              max="13"
              type="number"
              value="1"
              className="border border-black "
            />
            of 13
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
