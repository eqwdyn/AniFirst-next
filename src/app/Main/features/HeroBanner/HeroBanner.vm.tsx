import { IAnime } from "@/entities/Anime.ent";
import Image from "next/image";
import type { FC } from "react";
import cl from "./HeroBanner.module.css";
import { PrimaryButton } from "@/shared/ui/PrimaryButton";

interface Props {
  item: IAnime;
}

export const HeroBannerVM: FC<Props> = ({ item }) => {
  return (
    <section className={cl.hero}>
      <div className={cl.bgImage}>
        {/* <Image
          src={item.imgSrc}
          width={1440}
          height={800}
          alt=""
          loading="eager"
        /> */}
        <Image
          src={item.imgSrc}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          className={cl.bgImage}
          loading="eager"
        />
      </div>
      <div className={cl.content}>
        <div className={cl.tagsBlock}>
          {item.tags.map((tag, index) => {
            if (index === 0) {
              return (
                <p className={`${cl.tag} ${cl.firstTag}`}>
                  {tag.toUpperCase()}
                </p>
              );
            }
            return <p className={cl.tag}>{tag.toUpperCase()}</p>;
          })}
        </div>
        <div className={cl.titleBlock}>
          <h2 className={cl.title}>{item.title}</h2>
          <p className={cl.description}>{item.descrition}</p>
        </div>
        <div className={cl.buttons}>
          <PrimaryButton>
            <div className={cl.watchNowButtonContent}>
              <Image
                src="/svg/play.svg"
                width={18}
                height={18}
                loading="lazy"
                alt=""
              />
              <span className={cl.buttonText}>Watch Now</span>
            </div>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};
