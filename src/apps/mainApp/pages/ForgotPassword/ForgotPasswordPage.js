import React from "react";
import "./ForgotPasswordPage.css";
import ForgotPasswordForm from "../../../../components/FormForgotPassword/FormForgotPassword";

export default function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-page-content container">
        <ForgotPasswordForm
          role={"student"}
          label="Enter your email address and we will send you a password reset link."
        />
      </div>
    </div>
  );
}
