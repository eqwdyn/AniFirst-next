import cl from "./Header.module.css";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";
import { Navigation } from "@/widgets/Header/components/Navigation";
import { BurgerButton } from "@/widgets/Header/components/BurgerButton";
import { IconLink } from "@shared/ui/IconLink";

export const Header = ({}) => {
  return (
    <header className={cl.header}>
      <div className={cl.content}>
        <div className={cl.logoWrapper}>
          <NotStyledLink href="/" className={cl.logoLink}>
            <h1 className={cl.logo}>
              <span>Ani</span>
              <span className={cl.primaryColor}>First</span>
            </h1>
          </NotStyledLink>

          <nav className={cl.navigation}>
            <Navigation />
          </nav>
        </div>

        {/* <NotStyledLink href="/anime/search" className={cl.searchWrapper}>
          <MockSearchBar placeholder="Search anime, movies, creators..." />
        </NotStyledLink> */}

        <div className={cl.userActions}>
          <IconLink href="/anime/search" iconUrl="/svg/search.svg" />
          <IconLink href="/me" iconUrl="/svg/user.svg" />
        </div>

        <div className={cl.mobileActions}>
          <IconLink href="/anime/search" iconUrl="/svg/search.svg" />
          <BurgerButton />
        </div>
      </div>
    </header>
  );
};
