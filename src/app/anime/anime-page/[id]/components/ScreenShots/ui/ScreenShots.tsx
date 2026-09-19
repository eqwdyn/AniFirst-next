import type { FC } from "react";
import cl from "./ScreenShots.module.css";
import { ScreenShotsList } from "../components/ScreenShotsList";
import { getLang } from "@shared/utils/getLang";

interface Props {
  screensUrls: string[];
}

export const ScreenShots: FC<Props> = ({ screensUrls }) => {
  const lang = getLang();
  return (
    <div className={cl.container}>
      <h2>{lang === "ru" ? "Кадры из аниме" : "Cinematic Screenshots"}</h2>
      <ScreenShotsList items={screensUrls} />
    </div>
  );
};
