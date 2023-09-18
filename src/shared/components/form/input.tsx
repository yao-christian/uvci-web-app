"use client";

import { ClassAttributes, forwardRef } from "react";

type PropsType = {
  name?: string;
  label?: React.ReactNode;
  isRequired?: boolean;
  error?: string;
  placeholder?: string;
  className?: ClassAttributes<HTMLInputElement> | string;
  disabled?: boolean;
  type?: "text" | "email" | "password" | "number" | "date" | "file";
  defaultValue?: string | number;
  value?: string | number;
};

const Input = forwardRef<HTMLInputElement, PropsType>(
  (
    {
      name,
      label,
      isRequired,
      error,
      placeholder,
      className,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={name}
            className="bock text-sm font-medium text-gray-700"
          >
            {label} {isRequired && <span className="text-error">*</span>}
          </label>
        )}

        <input
          id={name}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          className={`appreance-none focus:border-green-700 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none sm:text-sm ${className}`}
          ref={ref}
          {...rest}
        />

        {error && <span className="text-sm text-error">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
