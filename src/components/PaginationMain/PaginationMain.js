import React, { useEffect } from "react";
import "./PaginationMain.css";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function PaginationMain({
  totalPages,
  activePage,
  pageSize,
  thunkAction,
  doInitialLoad = true,
}) {
  const shownPages = [
    1,
    activePage - 2,
    activePage - 1,
    activePage,
    activePage + 1,
    activePage + 2,
    totalPages,
  ];

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  pageSize = searchParams.get("pageSize") || pageSize || 10;

  useEffect(
    function () {
      if (doInitialLoad) {
        dispatch(thunkAction(searchParams.toString()));
      }
    },
    [searchParams, dispatch, thunkAction, doInitialLoad]
  );

  function pageHandler(p) {
    searchParams.set("page", p);
    setSearchParams(searchParams);
  }

  return (
    <section className="pagination-section my-4 border-0">
      <nav className="container">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${
              !activePage || activePage <= 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => pageHandler(activePage - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => {
            const virtualPage = i + 1;
            const isEllipsis =
              virtualPage === activePage - 3 || virtualPage === activePage + 3;
            return shownPages.includes(virtualPage) ? (
              <li
                className={`page-item ${
                  virtualPage === activePage ? "active" : ""
                }`}
                key={i}
              >
                <button
                  className="page-link"
                  onClick={() => pageHandler(virtualPage)}
                >
                  {virtualPage}
                </button>
              </li>
            ) : isEllipsis ? (
              <li key={i} className="page-item elipsed">
                <button className="page-link">...</button>
              </li>
            ) : null;
          })}
          <li
            className={`page-item ${activePage} ${totalPages} ${
              activePage === totalPages || activePage >= totalPages
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => pageHandler(activePage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
