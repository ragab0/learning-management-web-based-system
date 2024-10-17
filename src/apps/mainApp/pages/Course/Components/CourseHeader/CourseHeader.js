import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import myImage from "../../../../../../assets/customersImgs/cust5Heigh.png";
import ArrowChevron from "../../../../../../assets/svgsComps/ChevronRightSmall";
import "./CourseHeader.css";

export default function CourseHeader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  const SkeletonLoader = () => (
    <div className="course-header content">
      <div className="links">
        <Skeleton width={80} height={20} />
        <ArrowChevron />
        <Skeleton width={80} height={20} />
        <ArrowChevron />
        <Skeleton width={150} height={20} />
      </div>
      <div className="section1">
        <Skeleton width={300} height={30} />
        <Skeleton className="my-3" count={2} />
        <div className="rating my-3">
          <Skeleton width={40} height={25} />
          <Skeleton width={100} height={25} style={{ marginLeft: "10px" }} />
        </div>
        <div className="my-3 user_details">
          <Skeleton circle width={50} height={50} />
          <Skeleton width={150} height={20} style={{ marginLeft: "10px" }} />
        </div>
        <div className="lang mt-3">
          <Skeleton width={200} height={20} />
        </div>
      </div>
    </div>
  );

  return loading ? (
    <SkeletonLoader />
  ) : (
    <div className="course-header content">
      <div className="links">
        <Link
          className="btn btn-link text-decoration-none ms-0 ps-0 text-black"
          to="/"
        >
          Home
        </Link>
        <ArrowChevron />
        <Link
          className="btn btn-link text-decoration-none ms-0 text-black"
          to="/courses"
        >
          Categories
        </Link>
        <ArrowChevron />
        <Link className="btn btn-link text-decoration-none ms-0 user" to={"#"}>
          Introduction to User Experience Design
        </Link>
      </div>
      <div className="section1">
        <h1>Introduction to User Experience Design</h1>
        <p className="my-3">
          This course is meticulously crafted to provide you with a foundational
          understanding of the principles, methodologies, and tools that drive
          exceptional user experiences in the digital landscape.
        </p>
        <div className="rating my-3">
          <span className=" rate pe-2">4.6</span>
          <i className="star fa-solid fa-star"></i>
          <i className="star fa-solid fa-star"></i>
          <i className="star fa-solid fa-star"></i>
          <i className="star fa-solid fa-star"></i>
          <i className="star fa-solid fa-star"></i>
          <span className="no_rate px-2">(651651 rating)</span>
          <span className="desc">
            | 22 Total Hours. 155 Lectures. All levels
          </span>
        </div>
        <div className="my-3 user_details">
          <Link to="/mentors/0">
            <img src={myImage} alt="user" />
          </Link>
          <span className="userName">
            Created by
            <Link to="/mentors/0" className="ms-1 user_name text-capitalize">
              Ronald Richards
            </Link>
          </span>
        </div>
        <div className="lang mt-3">
          <i className="globe fa-solid fa-globe fs-5"></i>
          <span className="language ms-2">
            English, Spanish, Italian, German
          </span>
        </div>
      </div>
    </div>
  );
}
