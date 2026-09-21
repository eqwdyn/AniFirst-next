"use client";

import { FC, useState } from "react";
import Image from "next/image";
import cl from "./DescriptionToggle.module.css";
import { getLang } from "@shared/utils/getLang";

interface Props {
  description?: string;
}

export const DescriptionToggle: FC<Props> = ({ description }) => {
  const [open, setOpen] = useState(false);
  const lang = getLang();

  if (!description) return null;

  return (
    <div className={cl.wrapper}>
      <button
        className={cl.button}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {lang === "ru" ? "Описание" : "Description"}
        <Image
          src="/svg/chevron-down.svg"
          alt=""
          width={22}
          height={22}
          className={`${cl.arrow} ${open ? cl.arrowOpen : ""}`}
        />
      </button>

      <p className={`${cl.description} ${open ? cl.descriptionOpen : ""}`}>
        {description}
      </p>
    </div>
  );
};
