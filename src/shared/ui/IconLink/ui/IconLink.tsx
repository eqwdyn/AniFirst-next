import type { FC } from "react";
import cl from "./IconLink.module.css";
import { NotStyledLink } from "@shared/ui/NotStyledLink";
import Image from "next/image";

interface Props {
  iconUrl: string;
  href: string;
}

export const IconLink: FC<Props> = ({ iconUrl, href }) => {
  return (
    <NotStyledLink href={href} className={cl.link}>
      <div className={cl.iconWrapper}>
        <Image
          src={iconUrl}
          width={18}
          height={18}
          loading="lazy"
          alt=""
          className={cl.icon}
        />
      </div>
    </NotStyledLink>
  );
};
