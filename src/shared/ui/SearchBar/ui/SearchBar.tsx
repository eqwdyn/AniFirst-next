"use client";

import { useState, type FC } from "react";
import cl from "./SearchBar.module.css";
import Image from "next/image";

interface Props {
  placeholder?: string;
  onSearch: (text: string) => void;
}

export const SearchBar: FC<Props> = ({ placeholder, onSearch }) => {
  const [text, setText] = useState<string>("");

  return (
    <div className={cl.wrapper}>
      <button className={cl.searchButton} onClick={() => onSearch(text)}>
        <Image
          src="/svg/search.svg"
          width={16}
          height={16}
          loading="lazy"
          alt=""
        />
      </button>

      <input
        placeholder={placeholder}
        className={cl.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label={placeholder ?? "Search"}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(text);
          }
        }}
        name={placeholder ? `${placeholder}-input` : "search-input"}
      />
    </div>
  );
};
