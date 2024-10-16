import React from "react";
import "./ForgotPasswordPage.css";
import ForgotPasswordForm from "../../../../components/FormForgotPassword/FormForgotPassword";

export default function ForgotPassword() {
  return (
    <div className="form-dash-page forgot-password-dash-page dark">
      <div className="form-dash-page-content forgot-password-dash-page-content container">
        <ForgotPasswordForm
          role={"mentor"}
          label="Enter your email address and we will send you a password reset link."
        />
      </div>
    </div>
  );
}
