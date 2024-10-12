import React, { useState } from "react";
import Table from "../Table/Table";
import Pagination from "../../../../../../components/Pagination/Pagination";
import { customerData } from "../../../../../../data/dummyData";

export default function CustomerTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const customerDataPerPage = 10;

  const indexOfLastOrder = currentPage * customerDataPerPage;
  const indexOfFirstOrder = indexOfLastOrder - customerDataPerPage;
  const currentCustomerData = customerData.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const totalPages = Math.ceil(customerData.length / customerDataPerPage);

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

  const customerColumns = [
    { header: "ID", accessor: "id" },
    { header: "Customer", accessor: "customer" },
    { header: "Type", accessor: "type" },
    { header: "Country", accessor: "country" },
    { header: "Joined", accessor: "joined" },
    { header: "Total Amount", accessor: "totalAmount" },
    { header: "Last Order", accessor: "lastOrderId" },
  ];

  return (
    <div className="container-fluid pb-0 pt-0">
      <div className="row">
        <div className="col">
          <Table data={currentCustomerData} columns={customerColumns} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      </div>
    </div>
  );
}
