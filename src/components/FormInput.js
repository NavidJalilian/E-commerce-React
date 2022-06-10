import React from "react";

export default function FormInput({ label, ...otherProps }) {
  return (
    <div >
      <input {...otherProps} />
      <label htmlFor="" className="label">
        {label}
      </label>
    </div>
  );
}
