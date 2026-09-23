"use client";

import { useEffect, useState, type FC } from "react";
import { SearchBar } from "@shared/ui/SearchBar";
import { FilterList } from "./FilterList";
import { Dropbox } from "@shared/ui/Dropbox";
import { SearchPageLayout } from "./Layout/ui/Layout";
import { ResultsHeader } from "./ResultsHeader";
import { Show } from "@shared/ui/Show";
import { FallBack } from "./FallBack";
import { SearchAnimesAction } from "@app/actions/searchAnimes.action";
import { AnimesList } from "./AnimesList/ui/AnimesList";
import { AnimesService } from "@services/AnimeService";
import { IAnime } from "@entities/Anime.ent";

interface Props {
  initItems: IAnime[] | undefined;
}

export const SearchClient: FC<Props> = ({ initItems }) => {
  const [query, setQuery] = useState<string>("");
  const filters = {
    status: ["Онгоинг", "Завершенно", "Анонсированно"],
    type: ["Аниме", "Фильм", "OVA", "ONA"],
  };

  const [activeStatusFilter, setActiveStatusFilter] = useState<string | null>(
    null,
  );
  const [activeTypeFilter, setActiveTypeFilter] = useState<string | null>(null);
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
        // ИСПРАВЛЕНО: "Завершенно" (двойная н) — как в dropdown
        const statusMap: Record<string, "ongoing" | "released" | "anons"> = {
          Онгоинг: "ongoing",
          Завершенно: "released",
          Анонсированно: "anons",
        };

        const typeMap: Record<string, "tv" | "movie" | "ova" | "ona"> = {
          Аниме: "tv",
          Фильм: "movie",
          OVA: "ova",
          ONA: "ona",
        };

        const status = activeStatusFilter
          ? statusMap[activeStatusFilter]
          : undefined;
        const type = activeTypeFilter ? typeMap[activeTypeFilter] : undefined;

        const data = await SearchAnimesAction(query, status, type);

        setItems(data ?? []);
        setHasSearched(true);
      } catch (e) {
        console.error("Search failed", e);
        setItems([]);
        setHasSearched(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, activeTypeFilter, activeStatusFilter]);

  //   const activeFilters = [
  //     activeStatusFilter
  //       ? {
  //           label: activeStatusFilter,
  //           onRemove: () => setActiveStatusFilter(null),
  //         }
  //       : null,
  //     activeTypeFilter
  //       ? { label: activeTypeFilter, onRemove: () => setActiveTypeFilter(null) }
  //       : null,
  //   ].filter(
  //     (item): item is { label: string; onRemove: () => void } => item !== null,
  //   );

  return (
    <SearchPageLayout.Content>
      <SearchBar
        text={query}
        setText={setQuery}
        placeholder="Search anime, movies, creators..."
      />
      {/* <SearchPageLayout.DropBoxes>
        <Dropbox
          items={filters.status}
          onSelect={setActiveStatusFilter}
          placeholder="Статус"
        />
        <Dropbox
          items={filters.type}
          onSelect={setActiveTypeFilter}
          placeholder="Тип"
        />
      </SearchPageLayout.DropBoxes>

      <FilterList activeFilters={activeFilters} /> */}

      <ResultsHeader itemsLength={items.length} />

      <Show when={hasSearched && items.length === 0}>
        <FallBack
          resetFiltersHandle={() => {
            setActiveStatusFilter(null);
            setActiveTypeFilter(null);
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
