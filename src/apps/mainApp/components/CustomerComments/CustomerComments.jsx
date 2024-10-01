import React, { useState } from "react";
import "./CustomerComments.css";
import customerImage from "../../../../assets/customersImgs/cust4.png";
import { customers } from "../../../../data/dummyData";
import { Link } from "react-router-dom";
import QuoteIcon from "../../../../assets/svgsComps/QuoteIcon";

export default function CustomerComments() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevComment = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  const nextComment = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderCustomers = () => {
    let displayedCustomers = [];

    for (let i = 0; i < 3; i++) {
      const customerIndex = (currentIndex + i) % customers.length;
      displayedCustomers.push(customers[customerIndex]);
    }

    return displayedCustomers.map((customer, index) => (
      <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
        <div className="box d-flex flex-column align-items-start p-4">
          <QuoteIcon />
          <h6 className="my-3">"{customer.quote}"</h6>
          <div className="row d-flex justify-content-between w-100">
            <div className="col-3">
              <img
                src={customer.imgSrc ? customer.imgSrc : customerImage}
                alt={customer.name}
                className="img-fluid w-100"
              />
            </div>
            <div className="custinfo d-flex flex-column col-9 justify-content-center p-0">
              <h5 className="text-dark fw-bold">{customer.name}</h5>
              <h6 className="job ps-1">{customer.jobTitle}</h6>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="customer-comments-section">
      <div className="container">
        <header className=" d-flex justify-content-between mb-3">
          <h2>What Our Customers Say About Us</h2>
          <div className="col-8 d-flex justify-content-end align-items-center">
            <button onClick={prevComment} className="btn btn-secondary">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={nextComment} className="btn btn-secondary m-3">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </header>
        <div className="row ">{renderCustomers()}</div>
      </div>
    </section>
  );
}
