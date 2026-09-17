"use client";

import { SearchBar } from "@/shared/ui/SearchBar";
import cl from "./style.module.css";
import { Show } from "@shared/ui/Show";
import { ResultItem } from "./components/ResultItem/ui/ResultItem";
import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import { useEffect, useRef, useState } from "react";
import { SearchAnimesAction } from "../../actions/searchAnimes.action";

export const SearchAnimesBar = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<IAnimeSearch[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const data = await SearchAnimesAction(query);
        setResults(data ?? []);
      } catch (e) {
        console.error("Search failed", e);
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  // Скрываем при клике вне контейнера
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cl.container} ref={containerRef}>
      <SearchBar
        text={query}
        setText={setQuery}
        placeholder="Search anime, movies, creators..."
        className={cl.bar}
        onFocus={() => setVisible(true)}
      />
      <Show when={visible && !!results.length}>
        <div className={cl.results}>
          {results?.map((item) => (
            <ResultItem
              id={item.shikimori_id}
              title={item.title}
              previewUrl={item.posterUrl}
              rating={item.rating}
              studio={item.studio}
              key={item.shikimori_id}
            />
          ))}
        </div>
      </Show>
    </div>
  );
};
