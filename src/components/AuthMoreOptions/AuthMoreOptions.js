import React from "react";
import "./AuthMoreOptions.css";
import GoogleIcon from "../../assets/svgsComps/GoogleIcon";

export default function AuthMoreOptions({
  role = "student",
  type = "login",
  loading = false,
}) {
  return (
    <div className="auth-more-options">
      <p>
        <span>Sign {type === "login" ? "in" : "up"} with</span>
      </p>
      <ul className="d-flex">
        <li>
          <button
            className={`btn btn-outline-success ${loading ? "disabled" : ""}`}
          >
            {loading && <i className="fa fa-refresh fa-spin me-2"></i>}
            <GoogleIcon width={24} height={24} />
            <span className=" ms-1">Google</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
