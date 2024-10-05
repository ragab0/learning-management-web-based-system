import React from "react";
import LogoIcon from "../../../../assets/svgsComps/LogoIcon";
import { Link } from "react-router-dom";
import SignupForm from "../../../../components/SignupForm/SignupForm";
import AuthMoreOptions from "../../../../components/AuthMoreOptions/AuthMoreOptions";

export default function SignupPage() {
  return (
    <div className="signup-dashpage dark">
      <header className="container d-flex justify-content-between align-items-center py-3">
        <Link to="../">
          <LogoIcon />
        </Link>
        <div class="d-flex align-items-center">
          <span>Already have an account?</span>
          <Link to="../login" className="btn btn-link text-decoration-none">
            Sign in <span>&rArr;</span>
          </Link>
        </div>
      </header>
      <div className="signup-dashpage-body">
        <div className="signup-dashpage-content">
          <p className="title text-center">Welcome to LMS-DEPI!</p>
          <SignupForm role="mentor" />
          <AuthMoreOptions title={"Sign up with"} role="mentor" type="signup" />
        </div>
      </div>
    </div>
  );
}
