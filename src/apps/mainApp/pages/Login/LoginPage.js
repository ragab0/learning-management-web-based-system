import React from "react";
import "./LoginPage.css";
import AuthMoreOptions from "../../../../components/AuthMoreOptions/AuthMoreOptions";
import LoginForm from "../../../../components/FormLogin/FormLogin";

export default function LoginPage() {
  return (
    <div className="form-page login-page">
      <div className="form-page-content login-page-content">
        <h2 className=" text-center">Sign in to your account</h2>
        <LoginForm />
        <AuthMoreOptions title={"Sign in with"} />
      </div>
      <div className="form-img-wrapper login-img-wrapper"></div>
    </div>
  );
}
