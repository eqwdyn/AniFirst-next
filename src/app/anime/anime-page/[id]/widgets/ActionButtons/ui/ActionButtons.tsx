import type { FC } from "react";
import cl from "./ActionButtons.module.css";
import { PrimaryButton } from "@/shared/ui/PrimaryButton";
import { SecondaryButton } from "@/shared/ui/SecondaryButton";
import Image from "next/image";

interface Props {}

export const ActionButtons: FC<Props> = ({}) => {
  return (
    <div className={cl.buttons}>
      <PrimaryButton>
        <div className={cl.buttonContent}>
          <Image
            src="/svg/play.svg"
            width={18}
            height={18}
            loading="lazy"
            alt=""
          />
          <span className={cl.buttonText}>Watch Episode 1</span>
        </div>
      </PrimaryButton>
      <SecondaryButton>
        <div className={cl.buttonContent}>
          <Image
            src="/svg/plus.svg"
            width={18}
            height={18}
            loading="lazy"
            alt=""
          />
          <span className={cl.buttonText}>Add to WatchList</span>
        </div>
      </SecondaryButton>
    </div>
  );
};
