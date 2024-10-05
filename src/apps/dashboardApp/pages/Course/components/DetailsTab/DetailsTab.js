import React from "react";
import "./DetailsTab.css";
import CourseCard from "./courseCard";

export default function DetailsTab() {
  return (
    <div className="details-tab">
      <h3 className="ps-1 my-4">Course Details</h3>
      <div className="details-tab-container d-flex">
        <div className="details-tab-content w-75">
          <div className="courseName w-100">
            <h6 className="">Course Name</h6>
            <h5 className=" text-black fs-6 fw-normal">
              NCERT Solutions for Class 12 Chemistry{" "}
            </h5>
          </div>
          <div className="upload">
            <h6 className=" mt-5">Upload Intro Video</h6>
            <div className="uploadVideo text-center my-5">
              <i class="fa-solid fa-upload"></i>
              <h3 className=" fs-4 my-4">
                Drag and drop files, or{" "}
                <span className=" text-primary">Browse</span>
              </h3>
              <h6 className=" fw-light">Upload Video in Mov, MP4.</h6>
            </div>
            <h6 className=" mt-5">Upload Intro Image</h6>
            <div className="uploadThumbnail text-center my-5">
              <i class="fa-solid fa-upload"></i>
              <h3 className=" fs-4 my-4">
                Drag and drop files, or{" "}
                <span className=" text-primary">Browse</span>
              </h3>
              <h6 className=" fw-light">Upload Thumbnail in JPEG, PNG.</h6>
            </div>
          </div>
        </div>
        <div className="details-tab-aside w-25 ms-4">
          <CourseCard />
        </div>
      </div>
    </div>
  );
}
