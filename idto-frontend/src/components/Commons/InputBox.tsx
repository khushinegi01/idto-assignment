// src/components/InputWithIcon.tsx
import React from "react";
import type { InputHTMLAttributes } from "react";

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  label?: string;
  id: string;
  error?: string | undefined;
}

const InputBox: React.FC<InputWithIconProps> = ({ icon, label, id, error, className, ...rest }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1 block text-sm text-[var(--text-secondary)]">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <img
            src={icon}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 opacity-90"
          />
        )}

        <input
          id={id}
          className={[
            "w-full rounded-lg border border-[#E7E8EA] bg-[#F7F7F8] px-4 py-3 text-[#1C252E] placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none",
            icon ? "pl-10" : "",
            className || "",
          ].join(" ")}
          {...(rest as any)}
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputBox;
