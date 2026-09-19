import type { FC } from "react";
import cl from "./ActionButtons.module.css";
import { PrimaryButton } from "@/shared/ui/PrimaryButton";
import Image from "next/image";
import { MyListButton } from "@features/MyListButton";
import { IAnime } from "@entities/Anime.ent";

interface Props {
  item: IAnime;
}

export const ActionButtons: FC<Props> = ({ item }) => {
  const lang = "ru";

  return (
    <div className={cl.buttons}>
      <PrimaryButton>
        <div className={cl.buttonContent}>
          <Image
            src="/svg/play.svg"
            width={18}
            height={18}
            loading="lazy"
            alt=""
          />
          <span className={cl.buttonText}>
            {lang === "ru" ? "Смотреть" : "Watch"}
          </span>
        </div>
      </PrimaryButton>
      <MyListButton item={item} />
    </div>
  );
};
