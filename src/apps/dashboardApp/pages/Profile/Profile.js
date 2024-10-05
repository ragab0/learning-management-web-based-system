import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile-dash-page">
      <p>ProfilePage of mentor !!! is empty !!!</p>
      <Link to={"../login"} className="btn btn-primary">
        Login page
      </Link>
      <Link to={"../signup"} className="btn btn-primary">
        Signup page
      </Link>
    </div>
  );
}
