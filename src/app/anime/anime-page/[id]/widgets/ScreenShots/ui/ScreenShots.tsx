import type { FC } from "react";
import cl from "./ScreenShots.module.css";
import { ScreenShotsList } from "../components/ScreenShotsList";

interface Props {
  screensUrls: string[];
}

export const ScreenShots: FC<Props> = ({ screensUrls }) => {
  return (
    <div className={cl.container}>
      <h2>Cinematic Screenshots</h2>
      <ScreenShotsList items={screensUrls} />
    </div>
  );
};
