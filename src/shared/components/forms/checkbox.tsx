"use client";

import { forwardRef } from "react";

type PropsType = {
  name?: string;
  label?: string;
  error?: string;
  checkboxClassName?: string;
};

const Checkbox = forwardRef<HTMLInputElement, PropsType>(
  ({ name, label, error, checkboxClassName, ...rest }, ref) => {
    return (
      <div>
        <div className="flex items-center">
          <input
            id={name}
            type="checkbox"
            className={`w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${checkboxClassName}`}
            ref={ref}
            {...rest}
          />

          {label && (
            <label
              htmlFor={name}
              className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {label}
            </label>
          )}
        </div>

        {error && <span className="text-sm text-error-500">{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
