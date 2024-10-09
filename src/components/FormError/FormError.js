import React from "react";
import "./FormError.css";

export default function FormError({ errors, err }) {
  console.log("EEEEEEEEEEEEe", errors);

  return (
    <div className="error form-errors">
      {(err ? [err] : Object.values(errors)).map((e, i) => (
        <p key={i} className="text-danger mb-0">
          * {e.message}
        </p>
      ))}
    </div>
  );
}
