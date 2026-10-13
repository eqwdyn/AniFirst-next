import type { FC } from "react";
import cl from "./GenresBlock.module.css";
import { IAnimeGenre } from "@entities/AnimeGenre.ent";
import { ContentSection } from "@shared/ui/ContentSection";
import { GenresList } from "../components/GenresList";

interface Props {
  items: Record<string, string>;
  titleId: string;
  title: string;
  description?: string;
  urlToAll?: string;
  titleGap?: number;
}

export const GenresBlock: FC<Props> = ({
  items,
  title,
  titleId,
  titleGap,
  description,
  urlToAll,
}) => {
  return (
    <ContentSection
      title={title}
      titleId={titleId}
      description={description}
      urlToAll={urlToAll}
      titleGap={titleGap}
    >
      <GenresList items={items} />
    </ContentSection>
  );
};
