"use client";

type PropsType = {
  name?: string;
  label?: string;
  error?: string;
  radioClassName?: string;
};

const Radio = ({ name, label, error, radioClassName, ...rest }: PropsType) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          id={name}
          type="radio"
          {...rest}
          className={`w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${radioClassName}`}
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
};

export default Radio;
