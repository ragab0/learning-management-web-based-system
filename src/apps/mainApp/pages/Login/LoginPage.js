import React from "react";
import "./LoginPage.css";
import AuthMoreOptions from "../../../../components/AuthMoreOptions/AuthMoreOptions";
import LoginForm from "../../../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="login-page ">
      <div className="login-page-content">
        <h2 className=" text-center">Sign in to your account</h2>
        <LoginForm />
        <AuthMoreOptions title={"Sign in with"} />
      </div>
      <div className="login-img-wrapper"></div>
    </div>
  );
}
