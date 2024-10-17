import React from "react";
import NotFoundImg from "../../assets/NotFound.png";
import NotFoundImgAdmin from "../../assets/NotFoundAdmin.png";

export default function NotFound({ role }) {
  return (
    <div className="not-found-page d-flex align-items-center justify-content-center w-100">
      <div
        className=" img-fluid mx-auto my-5"
        style={{
          height: "700px",
          width: "700px",
          pointerEvents: "none",
        }}
      >
        <img
          alt="not-found"
          src={role === "admin" ? NotFoundImgAdmin : NotFoundImg}
        />
      </div>
    </div>
  );
}
