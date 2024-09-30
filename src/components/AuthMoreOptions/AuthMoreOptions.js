import React from "react";
import "./AuthMoreOptions.css";
import GoogleIcon from "../../assets/svgsComps/GoogleIcon";

export default function AuthMoreOptions({
  title,
  role = "student",
  type = "login",
}) {
  return (
    <div className="auth-more-options">
      <p>
        <span>{title}</span>
      </p>
      <ul className="d-flex">
        <li>
          <button className="btn btn-outline-danger">
            <GoogleIcon width={24} height={24} />
            <span className=" ms-1">Google</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
