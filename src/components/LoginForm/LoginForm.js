import React from "react";

export default function LoginForm({ role = "student" }) {
  return (
    <form className="auth-form login-form">
      <input type="hidden" name="role" value={role} />
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
      <button
        class="btn btn-dark px-3 w-100"
        style={{ paddingBlock: ".75rem" }}
      >
        Sign in
      </button>
    </form>
  );
}
