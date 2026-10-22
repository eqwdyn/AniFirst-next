"use client";

import type { FC, PropsWithChildren } from "react";
import cl from "./SecondaryButton.module.css";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const SecondaryButton: FC<Props> = ({
  className,
  onClick,
  children,
  disabled,
}) => {
  return (
    <button
      className={className ? `${cl.button} ${className}` : cl.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
