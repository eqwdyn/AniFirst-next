"use client";

import type { FC, PropsWithChildren } from "react";
import cl from "./SecondaryButton.module.css";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

export const SecondaryButton: FC<Props> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={className ? `${cl.button} ${className}` : cl.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
