import React from "react";
import LogoIcon from "../../../../assets/svgsComps/LogoIcon";
import { Link } from "react-router-dom";
import SignupForm from "../../../../components/FormSignup/FormSignup";

export default function SignupPage() {
  return (
    <div className="form-dash-page signup-dash-page dark">
      <header className="container d-flex justify-content-between align-items-center py-3">
        <Link to="../">
          <LogoIcon />
        </Link>
        <div className="d-flex align-items-center">
          <span>Already have an account?</span>
          <Link to="../login" className="btn btn-link text-decoration-none">
            Sign in <span>&rArr;</span>
          </Link>
        </div>
      </header>
      <div className="form-dash-page-body">
        <div className="form-dash-page-content">
          <p className="title text-center">Welcome to LMS-DEPI!</p>
          <SignupForm role="mentor" />
        </div>
      </div>
    </div>
  );
}
