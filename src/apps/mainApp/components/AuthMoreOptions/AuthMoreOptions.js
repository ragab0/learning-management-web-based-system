import React from "react";
import "./AuthMoreOptions.css";
import GoogleIcon from "../../../../assets/svgsComps/GoogleIcon";

export default function AuthMoreOptions({ title }) {
  return (
    <div className="auth-more-options">
      <p>
        <span>{title}</span>
      </p>
      <ul className="d-flex">
        <li>
          <button className="btn btn-outline-danger">
            <GoogleIcon width={24} height={24} />
            <span>Google</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
