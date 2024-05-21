import React, { useState, useEffect } from "react";
import { fetchNextPage } from "../Api";

export const Pagination = ({
  handlePrevPage,
  handleNextPage,
  data,
  pageCount,
}) => {
  //   const maxPages = data.length / 12; Limits number of pages to number of products - Inserted to show how I would handle more products
  const minPages = 1;
  return (
    <div>
      <button disabled={pageCount === 1} onClick={() => handlePrevPage()}>
        Prev
      </button>
      <button
        // disabled={maxPages === pageCount}  As above
        onClick={() => handleNextPage()}
      >
        Next
      </button>
    </div>
  );
};
