import { NotStyledLink } from "@/shared/ui/NotStyledLink";
import cl from "./Footer.module.css";
import Link from "next/link";

export const Footer = ({}) => {
  return (
    <footer className={cl.wrapper}>
      <div className={cl.container}>
        <div className={cl.top}>
          <div className={cl.brand}>
            <NotStyledLink href="/">
              <h2 className={cl.logo}>
                <span>Ani</span>
                <span className={cl.primaryColor}>First</span>
              </h2>
            </NotStyledLink>
            <p className={cl.description}>
              The ultimate anime streaming destination. Experience rich,
              high-fidelity streams with premium community perks and instant
              updates.
            </p>
          </div>
          <div className={cl.navigation}>
            <h3 className={cl.blockTitle}>NAVIGATION</h3>
            <nav className={cl.nav}>
              <NotStyledLink href="/" className={cl.navLink}>
                Browse
              </NotStyledLink>
              <NotStyledLink href="/" className={cl.navLink}>
                My List
              </NotStyledLink>
              <NotStyledLink href="/" className={cl.navLink}>
                New Releases
              </NotStyledLink>
            </nav>
          </div>
        </div>
        <div className={cl.bottom}>
          <small className={cl.copyRights}>
            &copy; 2026 AniFirst. All rights reserved. Built for anime lovers
            everywhere.
          </small>
          <address className={cl.socials}></address>
        </div>
      </div>
    </footer>
  );
};
