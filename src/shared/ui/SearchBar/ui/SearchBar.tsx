"use client";

import { type FC } from "react";
import cl from "./SearchBar.module.css";
import Image from "next/image";

interface Props {
  placeholder?: string;
  onSearch?: (text: string) => void;
  className?: string;
  onChange?: () => void;
  text: string;
  setText: (t: string) => void;
  onFocus?: () => void;
}

export const SearchBar: FC<Props> = ({
  placeholder,
  onChange,
  onSearch,
  className,
  text,
  setText,
  onFocus,
}) => {
  return (
    <div className={className ? `${cl.wrapper} ${className}` : cl.wrapper}>
      <button
        className={cl.searchButton}
        onClick={() => (onSearch ? onSearch(text) : null)}
      >
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
        autoComplete="off"
        data-lpignore="true"
        data-1p-ignore
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (onChange) {
            onChange();
          }
        }}
        onFocus={onFocus}
        aria-label={placeholder ?? "Search"}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch ? onSearch(text) : null;
          }
        }}
        name={placeholder ? `${placeholder}-input` : "search-input"}
      />
    </div>
  );
};
