import React from "react";

export const PageButton = ({ pg, setPage, isPreviusData }) => {
  return (
    <>
      <li>
        <a
          onClick={() => setPage(pg)}
          disabled={isPreviusData}
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {pg}
        </a>
      </li>
    </>
  );
};

export default PageButton;
