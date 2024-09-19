import React from "react";
import { Link } from "react-router-dom";
import asideImage from "../../../../assets/course2.png";
import "./CourseAside.css";

export default function CourseAside() {
  return (
    <aside className="aside">
      <div className="course_image">
        <img src={asideImage} alt="course2" />
      </div>
      <div className="course_info fs-5 fw-bold mt-4">
        <span className="price">$49</span>
        <strike className=" mx-3">$99.5</strike>
        <span className="discount">50% Off</span>
      </div>
      <button className=" btn_add mt-4 form-control border-0">
        Add to cart
      </button>
      <button className=" btn_buy mt-4 form-control">Buy Now</button>
      <div className="share mt-5">
        <h5>Share</h5>
        <div className="shareLinks mt-4">
          <Link to={"#"}>
            <i class=" text-primary fs-4 me-4 fa-brands fa-facebook"></i>
          </Link>
          <Link to={"#"}>
            <i class=" text-black fs-4 me-4 fa-brands fa-github"></i>
          </Link>
          <Link to={"#"}>
            <i class=" text-danger fs-4 me-4 fa-brands fa-google"></i>
          </Link>
          <Link to={"#"}>
            <i class=" text-black fs-4 me-4 fa-brands fa-x-twitter"></i>
          </Link>
          <Link to={"#"}>
            <i class=" text-success fs-4 me-4 fa-brands fa-microsoft"></i>
          </Link>
        </div>
      </div>
    </aside>
  );
}
