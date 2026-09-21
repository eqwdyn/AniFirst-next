"use client";

import { useState, type FC } from "react";
import { SearchBar } from "@shared/ui/SearchBar";
// import cl from './SearchClient.module.css'

interface Props {}

export const SearchClient: FC<Props> = ({}) => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <SearchBar
        text={query}
        setText={setQuery}
        placeholder="Search anime, movies, creators..."
      />
    </>
  );
};
