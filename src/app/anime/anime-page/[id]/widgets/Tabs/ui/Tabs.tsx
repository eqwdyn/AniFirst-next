"use client";

import { useState, type FC } from "react";
import cl from "./Tabs.module.css";
import { TabHeader } from "@/app/anime/anime-page/[id]/widgets/Tabs/components/TabHeader";
import { Show } from "@/shared/ui/Show";
import { Episodes } from "@/app/anime/anime-page/[id]/widgets/Tabs/components/Episodes";
import { IEpisode } from "@/entities/Episode.ent";

interface Props {
  activeEp: number;
  setActiveEp: (item: number) => void;
}

export const Tabs: FC<Props> = ({ setActiveEp, activeEp }) => {
  const items = ["Episodes", "Characters", "Reviews (142)", "Related"];

  const [curItem, setCurItem] = useState<string>(items[0]);
  const episodes: IEpisode[] = [
    {
      previewSrc: "/Thumb.png",
      timeMinutes: 24,
      title: "The Hardest Choice",
      order: 1,
    },
    {
      previewSrc: "/Thumb2.png",
      timeMinutes: 23,
      title: "First Encounter",
      order: 2,
    },
    {
      previewSrc: "/Thumb3.png",
      timeMinutes: 24,
      title: "Unlocks & Runes",
      order: 3,
    },
    {
      previewSrc: "/Thumb4.png",
      timeMinutes: 22,
      title: "Beast's Roar",
      order: 4,
    },
    {
      previewSrc: "/Thumb5.png",
      timeMinutes: 25,
      title: "A New Ally",
      order: 5,
    },
    {
      previewSrc: "/Thumb6.png",
      timeMinutes: 24,
      title: "Into the Flame",
      order: 6,
    },
  ];

  return (
    <div className={cl.container}>
      <TabHeader
        items={items}
        curItem={curItem}
        onClick={(item) => setCurItem(item)}
      />
      <Show when={curItem === "Episodes"}>
        <Episodes
          items={episodes}
          activeEp={activeEp}
          setActiveEp={setActiveEp}
        />
      </Show>
    </div>
  );
};
