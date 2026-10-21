import type { FC } from "react";
import cl from "./FieldGroup.module.css";

export interface FieldGroupProps {
  value: string;
  setValue: (t: string) => void;
  inputId: string;
  inputType: "text" | "password";
  inputPlaceholder?: string;
  label: string;
  required?: boolean;
  slot?: React.ReactNode;
  errorMessage?: string;
}

export const FieldGroup: FC<FieldGroupProps> = ({
  value,
  setValue,
  inputId,
  inputType,
  label,
  inputPlaceholder,
  required,
  slot,
  errorMessage,
}) => {
  return (
    <div className={cl.fieldGroup}>
      <label htmlFor={inputId} className={cl.label}>
        {label}
      </label>
      <div className={cl.inputWrapper}>
        <input
          type={inputType}
          id={inputId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={inputPlaceholder}
          required={required}
          className={cl.input}
          aria-errormessage={errorMessage?.length ? errorMessage : undefined}
        />
        {slot}
      </div>
      <span className={cl.errorLabel}>{errorMessage}</span>
    </div>
  );
};
