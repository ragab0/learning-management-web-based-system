import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import FormError from "../FormError/FormError";

export default function SignupForm({ role = "student" }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    console.log("data is", data);
  }

  return (
    <>
      <FormError errors={errors} />
      <form
        className="auth-form signup-form needs-validation "
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >
        <input type="hidden" name="role" value={role} required />
        <div>
          <label htmlFor="fname">Full name</label>
          <div className="has-validation d-flex gap-4">
            <input
              className={`form-control ${
                errors?.fname ? "is-invalid border-danger" : ""
              }`}
              placeholder="first name"
              id="fname"
              {...register("fname", {
                required: "First name mustn't be empty!",
              })}
            />
            <input
              className={`form-control ${
                errors?.lname ? "is-invalid border-danger" : ""
              }`}
              placeholder="last name"
              {...register("lname", {
                required: "Last name mustn't be empty!",
              })}
            />
          </div>
        </div>
        <label>
          <span>Username</span>
          <input
            className={`form-control ${
              errors?.username ? "is-invalid border-danger" : ""
            }`}
            placeholder="username ID"
            {...register("username", {
              required: " Username must not be empty!",
            })}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            className={`form-control ${
              errors?.email ? "is-invalid border-danger" : ""
            }`}
            placeholder="email ID"
            type="email"
            {...register("email", {
              required: " Email must not be empty!",
            })}
          />
        </label>
        <div>
          <label htmlFor="password">Password</label>
          <div className="d-flex gap-4">
            <input
              className={`form-control ${
                errors?.password ? "is-invalid border-danger" : ""
              }`}
              placeholder="password"
              id="password"
              {...register("password", {
                required: " Password must not be empty!",
              })}
            />
            <input
              className={`form-control ${
                errors?.passwordCheck ? "is-invalid border-danger" : ""
              }`}
              placeholder="password check"
              {...register("passwordCheck", {
                required: " Password check must not be empty!",
              })}
            />
          </div>
        </div>
        <button
          className="btn btn-dark px-3 w-100"
          style={{ paddingBlock: ".75rem" }}
        >
          Create Account
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
}
