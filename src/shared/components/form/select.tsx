"use client";

import { forwardRef } from "react";
import ReactSelect, { StylesConfig } from "react-select";

type PropsType = {
  name?: string;
  label?: string;
  isRequired?: boolean;
  error?: string;
  placeholder?: string;
  options: { value: any; label: string }[];
  styles?: StylesConfig;
  className?: string;
};

const Select = forwardRef<any, PropsType>(
  (
    {
      name,
      label,
      isRequired,
      error,
      placeholder = "",
      options,
      styles,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="bock text-sm font-medium text-gray-700"
          >
            {label} {isRequired && <span className="text-error-600">*</span>}
          </label>
        )}

        <ReactSelect
          name={name}
          noOptionsMessage={() => "Aucune option disponible"}
          options={options}
          placeholder={placeholder}
          styles={styles}
          ref={ref}
          {...rest}
        />

        {error && <span className="text-sm text-error-500">{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
