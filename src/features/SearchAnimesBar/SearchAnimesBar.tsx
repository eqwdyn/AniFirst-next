"use client";

import { SearchBar } from "@/shared/ui/SearchBar";

export const SearchAnimesBar = () => {
  const onSearch = (text: string) => {
    console.log("Search: ", text);
  };
  return (
    <SearchBar
      onSearch={onSearch}
      placeholder="Search anime, movies, creators..."
    />
  );
};
