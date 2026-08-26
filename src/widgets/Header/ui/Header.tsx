import { useColor } from "@/shared/hooks/useColor";
import { SearchAnimesBar } from "@/features/SearchAnimesBar";
import { AccPreview } from "../components/AccPreview";
import cl from "./Header.module.css";

export const Header = ({}) => {
  const primaryColor = useColor("primary");
  return (
    <header className={cl.header}>
      <div className={cl.content}>
        <div className={cl.logoWrapper}>
          <h1 className={cl.logo}>
            <span>Ani</span>
            <span style={{ color: primaryColor }}>First</span>
          </h1>

          <nav className={cl.navigation}>
            <span style={{ color: primaryColor }}>Browse</span>
            <span>My List</span>
            <span>New Releases</span>
            <span>Genres</span>
          </nav>
        </div>
        <div className={cl.searchWrapper}>
          <SearchAnimesBar />
        </div>

        <div className={cl.userActions}>
          <AccPreview />
        </div>
      </div>
    </header>
  );
};
