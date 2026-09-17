import { IAnime } from "@/entities/Anime.ent";
import Image from "next/image";
import type { FC } from "react";
import cl from "./HeroBanner.module.css";
import { PrimaryButton } from "@/shared/ui/PrimaryButton";
import { SecondaryButton } from "@/shared/ui/SecondaryButton";
import { TagsBlock } from "@/widgets/TagsBlock";
import Link from "next/link";
import { Show } from "@shared/ui/Show";

interface Props {
  item: IAnime;
}

export const HeroBannerVM: FC<Props> = ({ item }) => {
  const lang = "ru";

  return (
    <section className={cl.hero}>
      <div className={cl.bgImage}>
        <Image
          src={item.posterUrl}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          className={cl.bgImage}
          loading="eager"
        />
      </div>
      <div className={cl.content}>
        <Show when={!!item.tags}>
          {item.tags ? <TagsBlock items={item.tags} /> : null}
        </Show>
        <div className={cl.titleBlock}>
          <h2 className={cl.title}>{item.title}</h2>
          <p className={cl.description}>{item.descrition}</p>
        </div>
        <div className={cl.buttons}>
          <Link href={`/anime/anime-page/${item.shikimori_id}`}>
            <PrimaryButton tabIndex={-1}>
              <div className={cl.buttonContent}>
                <Image
                  src="/svg/play.svg"
                  width={18}
                  height={18}
                  loading="lazy"
                  alt=""
                />
                <span className={cl.buttonText}>
                  {lang === "ru" ? "Смотреть" : "Watch Now"}
                </span>
              </div>
            </PrimaryButton>
          </Link>
          <SecondaryButton>
            <div className={cl.buttonContent}>
              <Image
                src="/svg/plus.svg"
                width={18}
                height={18}
                loading="lazy"
                alt=""
              />
              <span className={`${cl.buttonText} ${cl.secondaryButtonText}`}>
                {lang === "ru" ? "Добавить в список" : "Add to List"}
              </span>
            </div>
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};
