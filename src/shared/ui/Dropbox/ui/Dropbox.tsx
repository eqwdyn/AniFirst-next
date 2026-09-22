"use client";

import { useEffect, useRef, useState, type FC } from "react";
import cl from "./Dropbox.module.css";
import Image from "next/image";
import { Show } from "../../Show";

interface Props {
  items: string[];
  onSelect: (t: string) => void;
  placeholder: string;
  maxWidth?: number;
}

export const Dropbox: FC<Props> = ({
  placeholder,
  items,
  onSelect,
  maxWidth,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [curItem, setCurItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const itemClickHandle = (item: string) => {
    setCurItem(item);
    setVisible(false);
    onSelect(item);
  };

  return (
    <div
      className={cl.container}
      ref={containerRef}
      style={{ maxWidth: maxWidth ?? undefined }}
    >
      <button className={cl.header} onClick={() => setVisible((prev) => !prev)}>
        <span className={cl.placeholder}>{curItem ?? placeholder}</span>
        <Image
          src="/svg/chevron-down.svg"
          alt=""
          loading="lazy"
          width={14}
          height={14}
        />
      </button>

      <Show when={visible && !!items.length}>
        <div className={cl.dropdown}>
          {items.map((item) => (
            <button
              className={cl.item}
              key={item}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </Show>
    </div>
  );
};
