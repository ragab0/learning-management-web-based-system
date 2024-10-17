import React, { useState } from "react";
import "./ChaptersTab.css";
import { useNavigate } from "react-router-dom";
import { chapters } from "../../../../../../data/dummyData";
import Table from "../Table/Table";
import Pagination from "../../../../../../components/Pagination/Pagination";

const chapterColumns = [
  { header: "ID", accessor: "id" },
  { header: "chapter", accessor: "chapter" },
  { header: "title", accessor: "title" },
  { header: "type", accessor: "type" },
  { header: "date", accessor: "date" },
  { header: "status", accessor: "status" },
  { header: "price", accessor: "price" },
];

export default function ChaptersTab() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 10;
  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = chapters.slice(
    indexOfFirstChapter,
    indexOfLastChapter
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

  const currentChaptersWithStyles = currentChapters.map((ch) => ({
    ...ch,
    status: (
      <span
        style={{
          color:
            ch.status === "Draft"
              ? "red"
              : ch.status === "Published"
              ? "green"
              : "black",
        }}
      >
        {ch.status}
      </span>
    ),
  }));

  const handleRowClick = ({ id }) => {
    navigate(`${id}}`);
  };

  return (
    <div className="container-fluid m-3 ms-0">
      <Table
        columns={chapterColumns}
        data={currentChaptersWithStyles}
        onRowClick={handleRowClick}
      />
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
