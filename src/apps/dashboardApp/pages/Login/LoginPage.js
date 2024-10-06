import React from "react";
import LogoIcon from "../../../../assets/svgsComps/LogoIcon";
import { Link } from "react-router-dom";
import LoginForm from "../../../../components/FormLogin/FormLogin";
import AuthMoreOptions from "../../../../components/AuthMoreOptions/AuthMoreOptions";

export default function LoginPage() {
  return (
    <div className="form-dash-page login-dash-page dark">
      <header className="container d-flex justify-content-between align-items-center py-3">
        <Link to="../">
          <LogoIcon />
        </Link>
        <div class="d-flex align-items-center">
          <span>Doesn't have an account?</span>
          <Link to="../signup" className="btn btn-link text-decoration-none">
            Sign up <span>&rArr;</span>
          </Link>
        </div>
      </header>
      <div className="form-dash-page-body">
        <div className="form-dash-page-content">
          <p className="title text-center">Let’s begin the adventure!</p>
          <LoginForm role="mentor" />
          <AuthMoreOptions title={"Sign in with"} role="mentor" type="login" />
        </div>
      </div>
    </div>
  );
}
