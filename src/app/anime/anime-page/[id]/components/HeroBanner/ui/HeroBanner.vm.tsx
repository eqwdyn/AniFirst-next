import type { FC } from "react";
import cl from "./HeroBanner.module.css";
import { TagsBlock } from "@/widgets/TagsBlock";
import { Metrics } from "@/app/anime/anime-page/[id]/components/HeroBanner/components/Metrics";
import { Show } from "@shared/ui/Show";

interface Props {
  tags?: string[];
  title: string;
  description?: string;
  rating?: number;
  episodes?: number;
  status?: "Airing" | "Done";
  studio?: string;
}

export const HeroBannerVM: FC<Props> = ({
  tags,
  title,
  description,
  rating,
  episodes,
  status,
  studio,
}) => {
  return (
    <div className={cl.headerBlock}>
      <Show when={!!tags}>
        <TagsBlock items={tags} />
      </Show>

      <div className={cl.titleBlock}>
        <h2 className={cl.title}>{title}</h2>
        <Show when={!!rating || !!status || !!episodes || !!studio}>
          <Metrics
            rating={rating}
            episodes={episodes}
            status={status}
            studio={studio}
          />
        </Show>
      </div>

      <p className={cl.description}>{description}</p>
    </div>
  );
};
