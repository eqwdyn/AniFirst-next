import { IAnime } from "@/entities/Anime.ent";
import Image from "next/image";
import type { FC } from "react";
import cl from "./HeroBanner.module.css";
import { PrimaryButton } from "@/shared/ui/PrimaryButton";
import { TagsBlock } from "@/widgets/TagsBlock";
import Link from "next/link";
import { Show } from "@shared/ui/Show";
import { MyListButton } from "@/features/MyListButton";
import { getLang } from "@shared/utils/getLang";
import { cutStringToLength } from "../../../../shared/utils/cutStringToLength";

interface Props {
  item?: IAnime;
}

export const HeroBannerVM: FC<Props> = ({ item }) => {
  const lang = getLang();

  return (
    <section className={cl.hero}>
      <div className={cl.bgImage}>
        <Show when={!!item?.posterUrl && !!item.title}>
          {!!item?.posterUrl && !!item.title ? (
            <Image
              src={item?.posterUrl ?? null}
              alt={item?.title}
              fill
              priority
              sizes="100vw"
              className={cl.bgImage}
              loading="eager"
            />
          ) : null}
        </Show>
      </div>
      <div className={cl.content}>
        <Show when={!!item?.tags}>
          {item?.tags ? <TagsBlock items={item?.tags} /> : null}
        </Show>
        <div className={cl.titleBlock}>
          <h2 className={cl.title}>{item?.title}</h2>
          {item?.description ? (
            <p className={cl.description}>
              {cutStringToLength(item.description, 160)}
            </p>
          ) : null}
        </div>
        <div className={cl.buttons}>
          <Link href={`/anime/anime-page/${item?.shikimori_id}`}>
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
          {item ? <MyListButton item={item} adaptiveText={true} /> : null}
        </div>
      </div>
    </section>
  );
};
