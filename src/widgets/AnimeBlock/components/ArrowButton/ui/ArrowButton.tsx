import type { FC } from "react";
import cl from "./ArrowButton.module.css";
import Image from "next/image";

interface Props {
  onClick?: () => void;
  direction?: "left" | "right";
  disabled?: boolean;
}

export const ArrowButton: FC<Props> = ({
  onClick,
  direction = "left",
  disabled = false,
}) => {
  return (
    <button onClick={onClick} className={cl.button} disabled={disabled}>
      <Image
        src={`/svg/chevron-${direction}.svg`}
        alt={direction}
        width={16}
        height={16}
        loading="lazy"
      />
    </button>
  );
};
