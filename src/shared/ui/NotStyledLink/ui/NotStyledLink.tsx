import type { FC } from "react";
import cl from "./NotStyledLink.module.css";
import Link, { LinkProps } from "next/link";

export const NotStyledLink: FC<
  LinkProps & { className?: string; children?: React.ReactNode }
> = ({ className, children, ...props }) => {
  return (
    <Link className={`${cl.link} ${className}`} {...props}>
      {children}
    </Link>
  );
};
