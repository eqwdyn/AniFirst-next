import type { FC } from "react";
import cl from "./Poster.module.css";
import Image from "next/image";

interface Props {
  imageSrc: string;
}

export const Poster: FC<Props> = ({ imageSrc }) => {
  return (
    <div className={cl.container}>
      <Image
        src={imageSrc}
        alt=""
        loading="eager"
        fill
        sizes="400"
        className={cl.image}
      />
    </div>
  );
};
