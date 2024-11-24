import React, { useState } from "react";
import "./CustomerComments.css";
import customerImage from "../../../../assets/customersImgs/cust4.png";
import { customers } from "../../../../data/dummyData";
import QuoteIcon from "../../../../assets/svgsComps/QuoteIcon";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

function CustomerCard({ customer, isFrontCard, onDragEnd }) {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.9, 1, 0.9]);
  const rotate = useTransform(x, [-150, 0, 150], [-5, 0, 5], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    }),
  };

  const variantsBackCard = {
    initial: { scale: 0.9, y: 20, opacity: 0.5 },
    animate: { scale: 0.9, y: 20, opacity: 0.5 },
    exit: { opacity: 0 },
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) {
      setExitX(-250);
      onDragEnd("next");
    } else if (info.offset.x > 100) {
      setExitX(250);
      onDragEnd("prev");
    }
  };

  return (
    <motion.div
      style={{
        width: "400px",
        height: "250px",
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab",
        borderRadius: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        scale,
        zIndex: isFrontCard ? 2 : 1,
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={isFrontCard ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      variants={isFrontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
    >
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
    </motion.div>
  );
}

export default function CustomerComments() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
    } else if (direction === "prev") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + customers.length) % customers.length
      );
    }
  };

  return (
    <section className="customer-comments-section container">
      <div className=" d-flex justify-content-center align-items-center row">
        <header className="col-lg-6 col-md-12">
          <h2 className="fw-semibold text-center mb-0">
            What Our Customers
            <span className="d-block">Say About Us...</span>
          </h2>
        </header>
        <motion.div
          style={{ width: "300px", height: "200px", position: "relative" }}
        >
          <AnimatePresence initial={false}>
            <CustomerCard
              key={currentIndex - 1}
              customer={
                customers[
                  (currentIndex - 1 + customers.length) % customers.length
                ]
              }
              isFrontCard={false}
              onDragEnd={handleDragEnd}
            />
            <CustomerCard
              key={currentIndex}
              customer={customers[currentIndex]}
              isFrontCard={true}
              onDragEnd={handleDragEnd}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
