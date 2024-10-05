import React, { useState } from "react";
import "./ChaptersTabDetailsTab.css";
<<<<<<< HEAD
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
=======
export default function ChaptersTabDetailsTab() {
  const renderSection = (title, content) => (
    <div className="section">
      <h6>{title}</h6>
      <h5 className="fs-6">{content}</h5>
    </div>
  );
  return (
    <div className="chapters-tab-details-tab">
      <h3 className="fs-5 fw-bold mt-3">Chapter Details</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <div className="chapters-tab-body-content">
        {renderSection("Title", "Chapter 1 - The Solid State")}
        {renderSection(
          "Subtitle",
          "Learn about the solid states with ease and get sample papers and notes too!"
        )}
        {renderSection(
          "Description",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        )}
      </div>
>>>>>>> 0acc3ff... sprint3 Updating
    </div>
  );
}
