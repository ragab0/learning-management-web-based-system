import React, { useEffect, useState } from "react";
import "./ChaptersTab.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../Table/Table";
import Pagination from "../../../../../../components/Pagination/Pagination";
import { chapters as dummyChapters } from "../../../../../../data/dummyData";
import { mentorAddNewChapter } from "../../../../../../store/slices/mentorSlice";

const chapterColumns = [
  { header: "chapter", accessor: "chapter" },
  { header: "title", accessor: "title" },
  { header: "date", accessor: "createdAt" },
  // { header: "ID", accessor: "id" },
  // { header: "type", accessor: "type" },
  // { header: "status", accessor: "status" },
  // { header: "price", accessor: "price" },
];

export default function ChaptersTab() {
  const [isNew, setIsNew] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    apiData: { result },
  } = useSelector((state) => state.mentor.currentCourse);
  const chapters = result?.modules || dummyChapters;

  useEffect(
    function () {
      let timer = setTimeout(function () {
        isNew && setIsNew(false);
      }, 5000);
      return function () {
        clearTimeout(timer);
      };
    },
    [isNew]
  );

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

  const handleRowClick = ({ id }) => {
    navigate(`${id}}`);
  };

  function addHandler() {
    dispatch(
      mentorAddNewChapter({
        title: "UnTitled Chapter",
        chapter: chapters.length + 1,
        createdAt: `${new Date().toDateString()} ${
          new Date().toTimeString().split(" ")[0]
        }`,
      })
    );
    setIsNew(true);
  }

  return (
    <div className="container-fluid m-3 ms-0">
      <Table
        isNew={isNew}
        columns={chapterColumns}
        data={currentChapters}
        onRowClick={handleRowClick}
      />
      <button
        onClick={addHandler}
        className={`btn btn-primary py-3 text-capitalize w-100 ${
          isNew ? "disabled" : ""
        }`}
      >
        add new chapter
      </button>
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
