import React, { useState } from "react";
import "./ChaptersTabDetailsTab.css";
import Table from "../../Table/Table";
import Pagination from "../../../../../../../components/Pagination/Pagination";
import { chapters } from "../../../../../../../data/dummyData";

export default function ChaptersTabDetailsTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 10;

  const indexOfLastOrder = currentPage * chaptersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - chaptersPerPage;
  const currentChaptersData = chapters.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const totalPages = Math.ceil(chapters.length / chaptersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const chapterColumns = [
    { header: "ID", accessor: "id" },
    { header: "Chapter", accessor: "chapter" },
    { header: "Title", accessor: "title" },
    { header: "Type", accessor: "type" },
    { header: "Date", accessor: "date" },
    { header: "Status", accessor: "status" },
    { header: "Price", accessor: "price" },
  ];

  return (
    <div className="commission-tab container-fluid">
      <Table data={currentChaptersData} columns={chapterColumns} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
}
