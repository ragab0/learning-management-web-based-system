import React from "react";
import AuthMoreOptions from "../../../../components/AuthMoreOptions/AuthMoreOptions";
import SignupForm from "../../../../components/SignupForm/SignupForm";

export default function SignupPage() {
  return (
    <div className="signup-page ">
      <div className="signup-img-wrapper"></div>
      <div className="signup-page-content">
        <h2 className=" text-center">Create Your Account</h2>
        <SignupForm />
        <AuthMoreOptions title={"Sign up with"} role="student" type="login" />
      </div>
    </div>
  );
}
