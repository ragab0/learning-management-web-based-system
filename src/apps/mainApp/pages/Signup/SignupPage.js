import React from "react";
import AuthMoreOptions from "../../../../components/AuthMoreOptions/AuthMoreOptions";
import SignupForm from "../../../../components/FormSignup/FormSignup";

export default function SignupPage() {
  return (
    <div className="form-page signup-page">
      <div className="form-img-wrapper signup-img-wrapper"></div>
      <div className="form-page-content signup-page-content">
        <h2 className=" text-center">Create Your Account</h2>
        <SignupForm />
        <AuthMoreOptions title={"Sign up with"} role="student" type="login" />
      </div>
    </div>
  );
}
