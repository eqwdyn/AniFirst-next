import type { FC } from "react";
import cl from "./FallBack.module.css";
import Image from "next/image";

interface Props {
  title?: string;
  description: React.ReactNode;
  footer?: React.ReactNode;
}

export const FallBack: FC<Props> = ({
  title = "Ничего не найдено",
  description,
  footer,
}) => {
  return (
    <div className={cl.container}>
      <div className={cl.imageWrapper}>
        <Image
          src="/svg/search.svg"
          alt="fallback"
          width={120}
          height={120}
          loading="lazy"
          className={cl.image}
        />
      </div>
      <div className={cl.textContent}>
        <h3 className={cl.title}>{title}</h3>
        <p className={cl.description}>{description}</p>
      </div>

      {footer ? footer : null}
    </div>
  );
};
