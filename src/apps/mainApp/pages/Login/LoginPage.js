import React from "react";
import "./LoginPage.css";
import AuthMoreOptions from "../../components/AuthMoreOptions/AuthMoreOptions";

export default function LoginPage() {
  return (
    <div className="login-page ">
      <div className="login-page-content">
        <h2 className=" text-center">Sign in to your account</h2>
        <form>
          <label>
            <span>Email</span>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="type your email"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              className="form-control"
              name="password"
              id="password"
              placeholder="type your password"
            />
          </label>
          <button class="btn btn-dark px-3 py-2">Sign in</button>
        </form>
        <AuthMoreOptions title={"Sign in with"} />
      </div>
      <div className="login-img-wrapper"></div>
    </div>
  );
}
