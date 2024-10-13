import React from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile-dash-page">
      <p>ProfilePage of mentor !!! is empty !!!</p>
      <div className="d-flex">
        <div className="me-3">
          <Link to={"../login"} className="btn btn-primary">
            Login page
          </Link>
        </div>
        <div>
          <Link to={"../signup"} className="btn btn-primary">
            Signup page
          </Link>
        </div>
      </div>
    </div>
  );
}
