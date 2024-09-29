import React from "react";
import "./SignupPage.css";
import AuthMoreOptions from "../../components/AuthMoreOptions/AuthMoreOptions";

export default function SignupPage() {
  return (
    <div className="signup-page ">
      <div className="signup-img-wrapper"></div>
      <div className="signup-page-content">
        <h2 className=" text-center">Create Your Account</h2>
        <form>
          <div>
            <label htmlFor="fname">Full name</label>
            <div className="d-flex gap-4">
              <input
                className="form-control"
                name="fname"
                id="fname"
                placeholder="first name"
              />
              <input
                className="form-control"
                name="lname"
                placeholder="last name"
              />
            </div>
          </div>
          <label>
            <span>Username</span>
            <input
              className="form-control"
              name="username"
              placeholder="username ID"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="email ID"
            />
          </label>
          <div>
            <label htmlFor="password">Password</label>
            <div className="d-flex gap-4">
              <input
                className="form-control"
                name="password"
                id="password"
                placeholder="password"
              />
              <input
                className="form-control"
                name="passwordCheck"
                placeholder="password check"
              />
            </div>
          </div>
          <button class="btn btn-dark px-3 py-2">Create Account</button>
        </form>
        <AuthMoreOptions title={"Sign up with"} />
      </div>
    </div>
  );
}
