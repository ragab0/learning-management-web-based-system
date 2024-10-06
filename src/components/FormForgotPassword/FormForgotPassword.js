import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import FormError from "../FormError/FormError";

export default function ForgotPasswordForm({ role, label }) {
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
      <form
        className="auth-form forgot-password-form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" name="role" value={role} />
        <label className="fw-bold" style={{ textTransform: "unset" }}>
          <span>{label}</span>
          <input
            className={`form-control mt-2 ${
              errors?.email ? "is-invalid border-danger" : ""
            }`}
            type="email"
            placeholder="type your email"
            {...register("email", {
              required: "Email must not be empty!",
            })}
          />
        </label>
        <FormError errors={errors} />
        <button
          className={`btn btn-dark px-3 w-100 ${
            errors.lengtn > 0 ? "disabled" : ""
          }`}
          style={{ paddingBlock: ".75rem" }}
        >
          Send password reset email
        </button>
      </form>

      <DevTool control={control} />
    </>
  );
}
