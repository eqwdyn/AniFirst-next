"use client";

import { useState } from "react";
import { Tabs } from "../Tabs";
import { VideoPlayer } from "../VideoPlayer";

import type { FC } from "react";

interface Props {
  startEp?: number;
}

export const UserEpisodesControll: FC<Props> = ({ startEp }) => {
  const [curEpisode, setCurEpisode] = useState<number>(startEp ?? 1);

  //   const url = `https://kodikplayer.com/seria/1304528/932d5da818729ec5ccc9be7968ee3717/720p`;
  //   const url = `https://kodikplayer.com/video/119273/5171a0d621143dd1fb26c9627d7ec46b/720p`;
  const url = `https://kodikplayer.com/serial/76476/18b9f948438da4057eb19e60529fc584/720p`;

  return (
    <>
      <Tabs setActiveEp={setCurEpisode} activeEp={curEpisode} />
      <VideoPlayer embedUrl={url} />
    </>
  );
};
