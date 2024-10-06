import React from "react";
import "./FormError.css";

export default function FormError({ errors }) {
  return (
    <div className="error form-errors">
      {Object.values(errors).map((e) => (
        <p className="text-danger mb-0">* {e.message}</p>
      ))}
    </div>
  );
}
