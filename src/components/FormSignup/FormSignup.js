import React, { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/slices/authSlice";
import AuthMoreOptions from "../AuthMoreOptions/AuthMoreOptions";
import FormError from "../FormError/FormError";

export default function SignupForm({ role = "student" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isNewUser } = useSelector((state) => state.auth.signup);
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
      JSON.parse(localStorage.getItem(role + "SignupForm")) || {}
    );
  }, [role]);

  useEffect(() => {
    const subscriberWatch = watch(function (formState) {
      localStorage.setItem(
        role + "SignupForm",
        JSON.stringify({
          fname: formState.fname,
          lname: formState.lname,
          username: formState.username,
          email: formState.email,
        })
      );
    });
    return function () {
      subscriberWatch.unsubscribe();
    };
  }, [watch, role]);

  useEffect(() => {
    if (isNewUser) {
      navigate("../login");
    }
  }, [isNewUser, navigate]);

  async function submitHandler(data) {
    dispatch(signup(data));
  }

  return (
    <>
      <FormError errors={errors} />
      <form
        className="auth-form signup-form needs-validation "
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >
        <input type="hidden" value={role} {...register("role")} />
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
              type="password"
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
              type="password"
              className={`form-control ${
                errors?.passwordCheck ? "is-invalid border-danger" : ""
              }`}
              placeholder="password check"
              {...register("passwordConfirm", {
                required: " Password confirm must not be empty!",
              })}
            />
          </div>
        </div>
        <button
          className={`btn btn-dark px-3 w-100 ${loading ? "disabled" : ""}`}
          style={{
            paddingBlock: ".75rem",
          }}
        >
          {loading && <i className="fa fa-refresh fa-spin"></i>} Create Account
        </button>
      </form>
      <AuthMoreOptions role={role} type="signup" loading={loading} />
      <DevTool control={control} />
    </>
  );
}
