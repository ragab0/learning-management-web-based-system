import React, { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";
import AuthMoreOptions from "../AuthMoreOptions/AuthMoreOptions";
import FormError from "../FormError/FormError";

export default function LoginForm({ role = "student" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthRole } = useSelector((state) => state.auth.login);
  const [initialDataForm, setInitialDataForm] = useState({});
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ values: initialDataForm });

  useEffect(() => {
    setInitialDataForm(
      JSON.parse(localStorage.getItem(role + "LoginForm")) || {}
    );
  }, [role]);

  useEffect(() => {
    const subscriberWatch = watch(function (formState) {
      localStorage.setItem(
        role + "LoginForm",
        JSON.stringify({
          email: formState.email,
        })
      );
    });
    return function () {
      subscriberWatch.unsubscribe();
    };
  }, [watch, role]);

  useEffect(() => {
    if (isAuthRole && isAuthRole === role) {
      navigate("..");
    }
  }, [isAuthRole, navigate, role]);

  async function submitHandler(data) {
    !loading && dispatch(login(data));
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
            type="password"
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
          className={`btn btn-dark px-3 w-100 ${loading ? "disabled" : ""}`}
          style={{
            paddingBlock: ".75rem",
          }}
        >
          {loading && <i className="fa fa-refresh fa-spin"></i>} Sign in
        </button>
      </form>
      <AuthMoreOptions role={role} type="login" loading={loading} />
      <DevTool control={control} />
    </>
  );
}
