import React from "react";

export default function SignupForm({ role = "student" }) {
  return (
    <form className="auth-form signup-form">
      <input type="hidden" name="role" value={role} />
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
      <button
        class="btn btn-dark px-3 w-100"
        style={{ paddingBlock: ".75rem" }}
      >
        Create Account
      </button>
    </form>
  );
}
