"use client";

import { forwardRef } from "react";

type PropsType = {
  name?: string;
  label?: string;
  isRequired?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, PropsType>(
  (
    { name, label, isRequired, error, placeholder, className, ...rest },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={name}
            className="bock text-sm font-medium text-gray-700"
          >
            {label} {isRequired && <span className="text-error-600">*</span>}
          </label>
        )}

        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className={`appreance-none block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-700 sm:text-sm ${className}`}
          ref={ref}
          {...rest}
        />

        {error && <span className="text-sm text-error-500">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
