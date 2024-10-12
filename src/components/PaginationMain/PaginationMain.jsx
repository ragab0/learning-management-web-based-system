import React, { useState } from "react";
import "./PaginationMain.css";

const data = [...new Array(10)];

export default function PaginationMain() {
  const [currentPage, setCurrentPage] = useState(1);

  function currentPageHandler(curr) {
    setCurrentPage(curr);
  }
  function prevPageHandler() {
    setCurrentPage((old) => old - 1);
  }
  function nextPageHandler() {
    setCurrentPage((old) => old + 1);
  }

  return (
    <section className="pagination-section my-4 border-0">
      <nav className="container">
        <ul className="pagination justify-content-center">
          <li class={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button class="page-link" tabindex="-1" onClick={prevPageHandler}>
              Previous
            </button>
          </li>
          {data.map((_, i) => (
            <li
              key={i}
              onClick={() => currentPageHandler(i + 1)}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button className="page-link">{i + 1}</button>
            </li>
          ))}
          <li
            class={`page-item ${currentPage === data.length ? "disabled" : ""}`}
          >
            <button class="page-link" onClick={nextPageHandler}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
