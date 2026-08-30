import { SearchAnimesBar } from "@/features/SearchAnimesBar";
import { AccPreview } from "../components/AccPreview";
import cl from "./Header.module.css";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";
import { Navigation } from "@/widgets/Header/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { BurgerButton } from "@/widgets/Header/components/BurgerButton";
import { SearchLink } from "@/widgets/Header/components/SearchLink";

export const Header = ({}) => {
  return (
    <header className={cl.header}>
      <div className={cl.content}>
        <div className={cl.logoWrapper}>
          <NotStyledLink href="/">
            <h1 className={cl.logo}>
              <span>Ani</span>
              <span className={cl.primaryColor}>First</span>
            </h1>
          </NotStyledLink>

          <nav className={cl.navigation}>
            <Navigation />
          </nav>
        </div>

        <div className={cl.searchWrapper}>
          <SearchAnimesBar />
        </div>

        <div className={cl.userActions}>
          <AccPreview />
        </div>

        <div className={cl.mobileActions}>
          <SearchLink />
          <BurgerButton />
        </div>
      </div>
    </header>
  );
};
