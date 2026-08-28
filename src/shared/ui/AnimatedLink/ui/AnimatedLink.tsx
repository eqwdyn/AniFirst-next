import type { FC } from "react";
import cl from "./AnimatedLink.module.css";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";

interface Props {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

export const AnimatedLink: FC<Props> = ({ children, href, isActive }) => {
  return (
    <NotStyledLink
      href={href}
      className={isActive ? `${cl.link} ${cl.activeLink}` : cl.link}
    >
      {children}
    </NotStyledLink>
  );
};
