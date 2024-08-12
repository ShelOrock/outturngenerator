import { useState, useEffect } from "react";

const usePagination = (resultsToPaginate, {
  resultsPerPage = 8,
  displayedPageNumbers = 7,
  dependencies = [],
}) => {

  const [ activePage, setActivePage ] = useState(1);
  const [ pages, setPages ] = useState([] as ({ id: string | number, page: number | "..." })[]);
  const [ totalPages, setTotalPages ] = useState(1);
  const [ lowerBound, setLowerBound ] = useState(1);
  const [ upperBound, setUpperBound ] = useState(1);
  const [ paginatedResults, setPaginatedResults ] = useState<any>([]);

  useEffect(() => {
    // Page number display
    const totalPageNumber = Math.ceil(resultsToPaginate.length / resultsPerPage);

    // These pages are displayed to the user
    const pageArray: ({ id: string | number, page: number | "..." })[] = [];

    // Calculate the range of pages to display. It will display up to 2 pages below and 2 pages above by default.
    const firstPage = Math.max(activePage - Math.floor(displayedPageNumbers / 2), 1);
    const lastPage = Math.min(firstPage + displayedPageNumbers - 1, totalPageNumber);

    // Push the first Page
    if(resultsToPaginate.length > resultsPerPage) {
      pageArray.push({ id: 1, page: 1 });
    };

    // Display an elllipses to the left of the current page range
    if(firstPage > 1) {
      pageArray.push({ id: "firstEllipses", page: "..." })
    };

    // Display all pages in the 
    for(let i = firstPage + 1; i < lastPage; i++) {
      pageArray.push({ id: i, page: i });
    };

    // Display an ellipses to right of the current page range
    if(lastPage < totalPageNumber) {
      pageArray.push({ id: "secondEllipses", page: "..." });
    };

    // Display the last page
    if(lastPage > 1) {
      pageArray.push({ id: totalPageNumber, page: totalPageNumber });
    }

    // Calculate the range of results based on the page number
    const paginationLowerBound = (activePage - 1) * resultsPerPage;
    const paginationUpperBound = Math.min(resultsToPaginate.length, resultsPerPage * activePage);

    // Slice the results to only display a range
    setPaginatedResults(resultsToPaginate.slice(paginationLowerBound, paginationUpperBound));
    setPages(pageArray);
    setTotalPages(totalPageNumber);
    setLowerBound(paginationLowerBound + 1);
    setUpperBound(paginationUpperBound);
  }, [activePage, resultsToPaginate.length, ...dependencies]);

  const incrementPage = () => setActivePage(activePage + 1);
  const decrementPage = () => setActivePage(activePage - 1);
  const resetPage = () => setActivePage(1);

  return {
    paginatedResults,
    activePage,
    pages,
    totalPages,
    lowerBound,
    upperBound,
    setActivePage,
    incrementPage,
    decrementPage,
    resetPage,
  };
};

export default usePagination;
