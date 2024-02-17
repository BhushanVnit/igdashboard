import clsx from "clsx";
import React, { InputHTMLAttributes, SelectHTMLAttributes } from "react";

const formClasses =
  "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";

interface LabelProps {
  id: string;
  children: React.ReactNode;
}

function Label({ id, children }: LabelProps) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export function TextField({
  id,
  label,
  type = "text",
  className = "",
  value = "",
  ...props
}: TextFieldProps) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input
        value={value}
        id={id}
        type={type}
        {...props}
        className={formClasses}
      />
    </div>
  );
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
}

export function SelectField({
  id,
  label,
  className = "",
  ...props
}: SelectFieldProps) {
  return (
    <div className={clsx("", className)}>
      {label && <Label id={id}>{label}</Label>}
      <div className="flex flex-row items-center">
        <select
          id={id}
          {...props}
          className={clsx(formClasses, "pr-8 , m-1")}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
