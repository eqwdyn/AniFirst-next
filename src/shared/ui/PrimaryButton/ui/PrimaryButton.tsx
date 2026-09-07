"use client";

import type { FC, PropsWithChildren } from "react";
import cl from "./PrimaryButton.module.css";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
}

export const PrimaryButton: FC<Props> = ({
  children,
  className,
  onClick,
  tabIndex,
}) => {
  return (
    <button
      className={className ? `${cl.button} ${className}` : cl.button}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
};
