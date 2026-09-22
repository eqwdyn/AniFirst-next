"use client";

import { useEffect, useState, type FC } from "react";
import { SearchBar } from "@shared/ui/SearchBar";
import { FilterList } from "./FilterList";
import { Dropbox } from "@shared/ui/Dropbox";
import { SearchPageLayout } from "./Layout/ui/Layout";
import { ResultsHeader } from "./ResultsHeader";
import { Show } from "@shared/ui/Show";
import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import { FallBack } from "./FallBack";

interface Props {}

export const SearchClient: FC<Props> = ({}) => {
  const [query, setQuery] = useState<string>("");
  const filters = {
    status: ["Онгоинг", "Завершенно", "Анонсированно"],
    type: ["Аниме", "Фильм", "OVA", "ONA"],
  };

  const [activeStatusFilter, setActiveStatusFilter] = useState<string | null>(
    null,
  );
  const [activeTypeFilter, setActiveTypeFilter] = useState<string | null>(null);

  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [items, setItems] = useState<IAnimeSearch[]>([]);

  useEffect(() => {
    if (activeStatusFilter && activeTypeFilter) {
      setActiveFilters([activeStatusFilter, activeTypeFilter]);
      return;
    }

    if (activeStatusFilter) {
      setActiveFilters([activeStatusFilter]);
      return;
    }

    if (activeTypeFilter) {
      setActiveFilters([activeTypeFilter]);
      return;
    }
  }, [activeTypeFilter, activeStatusFilter]);

  return (
    <SearchPageLayout.Content>
      <SearchBar
        text={query}
        setText={setQuery}
        placeholder="Search anime, movies, creators..."
      />
      <SearchPageLayout.DropBoxes>
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

      <FilterList
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      <ResultsHeader itemsLength={items.length} />
      <Show when={items.length === 0}>
        <FallBack resetFiltersHandle={() => setActiveFilters([])} />
      </Show>
    </SearchPageLayout.Content>
  );
};
