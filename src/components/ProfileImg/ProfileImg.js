import React from "react";
import "./ProfileImg.css";

export default function ProfileImg({ photo, fL, lL }) {
  return (
    <div className="profile-img img-wrapper">
      {photo ? (
        <img src={photo} alt="profile" />
      ) : (
        <span className=" text-capitalize">
          {fL}
          {lL}
        </span>
      )}
    </div>
  );
}
