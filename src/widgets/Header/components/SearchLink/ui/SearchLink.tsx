import cl from "./SearchLink.module.css";
import Image from "next/image";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";

export const SearchLink = ({}) => {
  return (
    <NotStyledLink href={"/anime/search"} className={cl.searchLink}>
      <Image
        src="/svg/search.svg"
        width={18}
        height={18}
        loading="lazy"
        alt=""
      />
    </NotStyledLink>
  );
};
