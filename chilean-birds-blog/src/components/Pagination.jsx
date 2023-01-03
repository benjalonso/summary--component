import React from "react";
import { useQuery } from "@tanstack/react-query";
import { PageButton } from "./PageButton.jsx";
const Pagination = ({ pg, setPage, data, isPreviusData }) => {
  // let page = 0;
  
  const next = async () => await setPage((prev) => prev + 1);

  const preview = async () => await setPage((prev) => prev - 1);

  const pagesArray = new Array(data?.totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <div className="grid place-content-center my-11">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px">
          <li>
            <a
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={preview}
            >
              Previous
            </a>
          </li>
          {pagesArray.map((pg) => (
            <PageButton
              key={pg}
              pg={pg}
              setPage={setPage}
              isPreviusData={isPreviusData}
            />
          ))}
          <li>
            <a
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={next}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
