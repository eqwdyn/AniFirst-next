"use client";

import { useEffect, useState, type FC } from "react";
import { SearchBar } from "@shared/ui/SearchBar";
import { SearchPageLayout } from "./Layout/ui/Layout";
import { ResultsHeader } from "./ResultsHeader";
import { Show } from "@shared/ui/Show";
import { FallBack } from "./FallBack";
import { SearchAnimesAction } from "@app/actions/searchAnimes.action";
import { AnimesList } from "./AnimesList/ui/AnimesList";
import { IAnime } from "@entities/Anime.ent";

interface Props {
  initItems: IAnime[] | undefined;
}

export const SearchClient: FC<Props> = ({ initItems }) => {
  const [query, setQuery] = useState<string>("");
  const [items, setItems] = useState<IAnime[]>(initItems ?? []);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setItems(initItems ?? []);
      setHasSearched(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const data = await SearchAnimesAction(query);

        setItems(data ?? []);
        setHasSearched(true);
      } catch (e) {
        console.error("Search failed", e);
        setItems([]);
        setHasSearched(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <SearchPageLayout.Content>
      <SearchBar
        text={query}
        setText={setQuery}
        placeholder="Search anime, movies, creators..."
      />

      <ResultsHeader itemsLength={items.length} />

      <Show when={hasSearched && items.length === 0}>
        <FallBack
          resetFiltersHandle={() => {
            setQuery("");
          }}
        />
      </Show>
      <Show when={items.length > 0}>
        <AnimesList items={items} />
      </Show>
    </SearchPageLayout.Content>
  );
};
