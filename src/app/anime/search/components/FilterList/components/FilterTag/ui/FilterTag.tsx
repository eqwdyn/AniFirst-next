"use client";

import type { FC } from "react";
import cl from "./FilterTag.module.css";
import Image from "next/image";

interface Props {
  label: string;
  onRemove: (t: string) => void;
}

export const FilterTag: FC<Props> = ({ label, onRemove }) => {
  return (
    <div className={cl.filterTag}>
      <span>{label}</span>
      <button
        type="button"
        onClick={() => onRemove(label)}
        className={cl.tagClose}
      >
        <Image
          src="/svg/close.svg"
          alt=""
          loading="lazy"
          width={12}
          height={12}
        />
      </button>
    </div>
  );
};
