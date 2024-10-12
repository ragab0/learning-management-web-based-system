import React, { useState } from "react";
import "./CommissionTab.css";
import Table from "../Table/Table";
import Pagination from "../../../../../../components/Pagination/Pagination";
import { orders } from "../../../../../../data/dummyData";

export default function CommissionTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

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

  const orderColumns = [
    { header: "Order ID", accessor: "orderId" },
    { header: "Customer", accessor: "customer" },
    { header: "Type", accessor: "type" },
    { header: "Date", accessor: "date" },
    { header: "Status", accessor: "status" },
    { header: "Commission", accessor: "commission" },
  ];

  const currentOrdersWithStyles = currentOrders.map((order) => ({
    ...order,
    status: (
      <span
        style={{
          color: order.status === "Received" ? "green" : "yellow",
        }}
      >
        {order.status}
      </span>
    ),
  }));

  return (
    <div className="commission-tab container-fluid">
      <div className="tableData py-2 pb-0 pt-0">
        <div className="row">
          <div className="col">
            <Table columns={orderColumns} data={currentOrdersWithStyles} />
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
    </div>
  );
}
