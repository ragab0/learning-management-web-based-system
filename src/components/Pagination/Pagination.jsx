import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav className="d-flex justify-content-center my-5 pb-0 mb-0">
        <ul className="pagination pagination-sm">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              onClick={handlePreviousPage}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageNumbers.map((num) => (
            <li
              key={num}
              onClick={() => handlePageChange(num)}
              className={`page-item ${currentPage === num ? "active" : ""}`}
            >
              <a className="page-link" href="#">
                {num}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              href="#"
              onClick={handleNextPage}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
