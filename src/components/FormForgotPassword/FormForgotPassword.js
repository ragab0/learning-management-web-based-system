import React, { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import FormError from "../FormError/FormError";
import { motion, AnimatePresence } from "framer-motion";

export default function ForgotPasswordForm({ role, label }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);

  function submitHandler(data) {
    console.log("data is", data);
    if (Object.keys(errors).length === 0) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  }

  const errorVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <div className="error">
        <AnimatePresence>
          {Object.values(errors).map((e, index) => (
            <motion.p
              key={index}
              className="text-danger mb-0"
              variants={errorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              * {e.message}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>

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

      <AnimatePresence>
        {success && (
          <motion.p
            className="text-success mt-3"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Login successful!
          </motion.p>
        )}
      </AnimatePresence>

      <DevTool control={control} />
    </>
  );
}
