"use client";

import type { FC, PropsWithChildren } from "react";
import cl from "./PrimaryButton.module.css";
import { useColor } from "@/shared/hooks/useColor";

interface Props extends PropsWithChildren {
  className?: string;
  onClick: () => void;
}

export const PrimaryButton: FC<Props> = ({ children, className, onClick }) => {
  const bgColor = useColor("primary");
  return (
    <button
      className={className ? `${cl.button} ${className}` : cl.button}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
