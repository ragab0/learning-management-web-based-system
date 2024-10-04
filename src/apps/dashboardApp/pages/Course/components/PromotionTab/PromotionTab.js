import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PromotionTab.css";
import Table from "../Table/Table";
import Pagination from "../../../../../../components/Pagination/Pagination";
import { couponsData } from "../../../../../../data/dummyData";

export default function PromotionTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const couponsPerPage = 10;
  const navigate = useNavigate();
  const { courseId } = useParams();

  const indexOfLastCoupon = currentPage * couponsPerPage;
  const indexOfFirstCoupon = indexOfLastCoupon - couponsPerPage;
  const currentCoupons = couponsData.slice(
    indexOfFirstCoupon,
    indexOfLastCoupon
  );
  const totalPages = Math.ceil(couponsData.length / couponsPerPage);

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

  const couponsColumns = [
    { header: "Offer Name", accessor: "offerName" },
    { header: "Code", accessor: "code" },
    { header: "Amount", accessor: "amount" },
    { header: "Status", accessor: "status" },
    { header: "Quantity", accessor: "qty" },
    { header: "Redemptions", accessor: "redemptions" },
  ];

  const currentCouponsWithStyles = currentCoupons.map((coupon) => ({
    ...coupon,
    status: (
      <span
        style={{
          color:
            coupon.status === "Expired"
              ? "red"
              : coupon.status === "Active"
              ? "green"
              : coupon.status === "Scheduled"
              ? "blue"
              : "black",
        }}
      >
        {coupon.status}
      </span>
    ),
  }));

  const handleRowClick = (coupon) => {
    navigate(
      `/dashboard/courses/${courseId}/promotion/${
        coupon.offerId
      }?offerName=${encodeURIComponent(coupon.offerName)}`
    );
  };

  return (
    <div className="promotion-tab container-fluid">
      <h3 className="text-black">Coupons</h3>
      <Table
        columns={couponsColumns}
        data={currentCouponsWithStyles}
        onRowClick={handleRowClick}
      />
      <div className="container row justify-content-between align-items-center">
        <div className="result col-2">
          <p className="mb-0">Results: {couponsData.length}</p>
        </div>
        <div className="col-10 d-flex justify-content-end">
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
