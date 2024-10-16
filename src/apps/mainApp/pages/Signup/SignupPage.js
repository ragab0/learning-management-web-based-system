import React from "react";
import SignupForm from "../../../../components/FormSignup/FormSignup";

export default function SignupPage() {
  return (
    <div className="form-page signup-page">
      <div className="form-img-wrapper signup-img-wrapper"></div>
      <div className="form-page-content signup-page-content">
        <h2 className=" text-center">Create Your Account</h2>
        <SignupForm role="student" />
      </div>
    </div>
  );
}
