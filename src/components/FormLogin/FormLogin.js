import React, { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import FormError from "../FormError/FormError";
import { Link } from "react-router-dom";
import myAxios from "../../utils/myAxios";

export default function LoginForm({ role = "student" }) {
  const [initialDataForm, setInitialDataForm] = useState({});
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ values: initialDataForm });

  useEffect(() => {
    setInitialDataForm(JSON.parse(localStorage.getItem("loginForm")) || {});
  }, []);

  useEffect(() => {
    const subscriberWatch = watch(function (formState) {
      localStorage.setItem(
        "loginForm",
        JSON.stringify({
          email: formState.email,
        })
      );
    });
    return function () {
      subscriberWatch.unsubscribe();
    };
  }, [watch]);

  async function submitHandler(data) {
    console.log("data is", data);
    try {
      await myAxios.post("/login", data);
    } catch (error) {
      console.log("ERR:", error);
    }
  }

  return (
    <>
      <FormError errors={errors} />
      <form
        className="auth-form login-form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" value={role} {...register("role")} />
        <label>
          <span>Email</span>
          <input
            className={`form-control ${
              errors?.email ? "is-invalid border-danger" : ""
            }`}
            type="email"
            placeholder="type your email"
            {...register("email", {
              required: "Email must not be empty!",
            })}
          />
        </label>
        <label>
          <span className="d-flex justify-content-between align-items-center ">
            Password{" "}
            <Link to="../reset-password" className="h6 fw-light btn-link ">
              Forgot password?
            </Link>
          </span>
          <input
            className={`form-control ${
              errors?.password ? "is-invalid border-danger" : ""
            }`}
            id="password"
            placeholder="type your password"
            {...register("password", {
              required: "Password must not be empty!",
            })}
          />
        </label>
        <button
          className="btn btn-dark px-3 w-100"
          style={{ paddingBlock: ".75rem" }}
        >
          Sign in
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
}
