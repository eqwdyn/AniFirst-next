"use client";

import { ReactNode, FC } from "react";
import cl from "./GenericForm.module.css";
import { NotStyledLink } from "@shared/ui/NotStyledLink";
import { FieldGroup } from "../components/FieldGroup";
import { FieldGroupProps } from "../components/FieldGroup/ui/FieldGroup";

interface Props {
  title: string;
  subTitle?: string;
  fields: FieldGroupProps[];
  handleSubmit: (e: React.SubmitEvent) => Promise<void>;
  footerSlot?: ReactNode;
  formFooterSlot?: ReactNode;
  submitButtonText: string;
}

export const GenericForm: FC<Props> = ({
  title,
  subTitle,
  fields,
  handleSubmit,
  footerSlot,
  formFooterSlot,
  submitButtonText,
}) => {
  return (
    <div className={cl.container}>
      <h2 className={cl.title}>{title}</h2>
      {subTitle && <p className={cl.subtitle}>{subTitle}</p>}

      <form onSubmit={handleSubmit} className={cl.form}>
        {fields.map((field) => (
          <FieldGroup
            key={field.inputId}
            value={field.value}
            setValue={field.setValue}
            inputId={field.inputId}
            inputType={field.inputType}
            label={field.label}
            inputPlaceholder={field.inputPlaceholder}
            required={field.required}
            slot={field.slot}
            errorMessage={field.errorMessage}
          />
        ))}

        {formFooterSlot}

        <button type="submit" className={cl.submitButton}>
          {submitButtonText}
        </button>
      </form>

      {footerSlot}
    </div>
  );
};
