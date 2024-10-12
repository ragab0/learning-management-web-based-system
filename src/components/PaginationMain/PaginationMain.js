import React from "react";
import "./PaginationMain.css";

export default function PaginationMain({
  totalPages,
  page,
  paginationDispather,
}) {
  const shownPages = [
    1,
    page - 2,
    page - 1,
    page,
    page + 1,
    page + 2,
    totalPages,
  ];
  function prevPageHandler() {
    paginationDispather(page - 1);
  }
  function nextPageHandler() {
    paginationDispather(page + 1);
  }
  function currentPageHandler(c) {
    paginationDispather(c);
  }

  return (
    <section className="pagination-section my-4 border-0">
      <nav className="container">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${!page || page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={prevPageHandler}>
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => {
            const virtualPage = i + 1;
            const shouldShowEllipsis =
              virtualPage === page - 3 || virtualPage === page + 3;
            return shownPages.includes(virtualPage) ? (
              <li
                className={`page-item ${virtualPage === page ? "active" : ""}`}
                key={i}
              >
                <button
                  className="page-link"
                  onClick={() => currentPageHandler(virtualPage)}
                >
                  {virtualPage}
                </button>
              </li>
            ) : shouldShowEllipsis ? (
              <li key={i} className="page-item elipsed">
                <button className="page-link">...</button>
              </li>
            ) : null;
          })}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={nextPageHandler}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
