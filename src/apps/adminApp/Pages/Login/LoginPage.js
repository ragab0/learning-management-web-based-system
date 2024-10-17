import React from "react";
import "./LoginPage.css";
import LoginForm from "../../../../components/FormLogin/FormLogin";

export default function LoginPage() {
  return (
    <div className="admin-login">
      <div className="admin-login-card admin-container-card dark">
        <LoginForm role="admin" />
      </div>
    </div>
  );
}
