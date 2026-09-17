"use client";

import { useState } from "react";
import { Tabs } from "../Tabs";

import type { FC } from "react";

interface Props {
  startEp?: number;
}

export const UserEpisodesControll: FC<Props> = ({ startEp }) => {
  const [curEpisode, setCurEpisode] = useState<number>(startEp ?? 1);

  return (
    <>
      <Tabs setActiveEp={setCurEpisode} activeEp={curEpisode} />
    </>
  );
};
