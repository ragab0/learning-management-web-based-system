import React from "react";
import "./LoginPage.css";
import LoginForm from "../../../../components/FormLogin/FormLogin";

export default function LoginPage() {
  return (
    <div className="form-page login-page">
      <div className="form-page-content login-page-content">
        <h2 className=" text-center">Sign in to your account</h2>
        <LoginForm role="student" />
      </div>
      <div className="form-img-wrapper login-img-wrapper"></div>
    </div>
  );
}
