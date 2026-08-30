"use client";

import { useCallback, useEffect, useRef, useState, type FC } from "react";
import cl from "./AnimeBlock.module.css";
import { ArrowButton } from "@/widgets/AnimeBlock/components/ArrowButton";
import { Slider } from "@/widgets/Slider";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";

interface Props {
  titleId: string;
  title: string;
  description: string;
  urlToAll: string;
  items: any[];
  renderItems: (item: any) => React.ReactNode;
}

export const AnimeBlock: FC<Props> = ({
  titleId,
  title,
  description,
  items,
  urlToAll,
  renderItems,
}) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const cardWidth = 224;
  const gap = 0;

  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const scrollByStep = useCallback(
    (direction: "left" | "right") => {
      if (!listRef.current) return;

      const step = cardWidth * 2 + gap;
      listRef.current.scrollBy({
        left: direction === "right" ? step : -step,
        behavior: "smooth",
      });
    },
    [cardWidth, gap],
  );

  const handleScrollRight = useCallback(
    () => scrollByStep("right"),
    [scrollByStep],
  );
  const handleScrollLeft = useCallback(
    () => scrollByStep("left"),
    [scrollByStep],
  );

  useEffect(() => {
    const updateFlags = () => {
      if (!listRef.current) {
        setCanScrollLeft(false);
        setCanScrollRight(false);
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      const threshold = 2;

      setCanScrollLeft(scrollLeft > threshold);
      setCanScrollRight(scrollWidth - scrollLeft - clientWidth > threshold);
    };

    const element = listRef.current;
    if (element) {
      element.addEventListener("scroll", updateFlags, { passive: true });
      // Сразу обновляем флаги, чтобы не было рассинхрона при первом рендере
      updateFlags();
    }

    return () => {
      if (element) element.removeEventListener("scroll", updateFlags);
    };
  }, [items]);

  return (
    <section aria-labelledby={titleId} className={cl.container}>
      <header className={cl.headerBlock}>
        <div className={cl.titleContent}>
          <h2 id={titleId} className={cl.title}>
            {title}
          </h2>
          <p className={cl.description}>{description}</p>
        </div>
        <div className={cl.navigationButtons}>
          <ArrowButton
            direction="left"
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            className={cl.arrowButton}
          />
          <ArrowButton
            direction="right"
            onClick={handleScrollRight}
            disabled={!canScrollRight}
            className={cl.arrowButton}
          />
          <NotStyledLink href={urlToAll} className={cl.seeAllLink}>
            See All
          </NotStyledLink>
        </div>
      </header>

      <Slider items={items} listRef={listRef} renderItem={renderItems} />
    </section>
  );
};
