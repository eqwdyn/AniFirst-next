import cl from "./FallBack.module.css";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import { FallBack as FallBackComponent } from "@widgets/FallBack";
import Image from "next/image";

interface Props {
  resetFiltersHandle: () => void;
}

export const FallBack = ({ resetFiltersHandle }: Props) => {
  return (
    <div className={cl.wrapper}>
      <FallBackComponent
        description={
          <>
            Попробуйте изменить запрос или снять некоторые фильтры.
            <br />
            Мы не смогли найти аниме, соответствующие вашему поиску.
          </>
        }
        footer={
          <PrimaryButton onClick={resetFiltersHandle}>
            <div className={cl.buttonContent}>
              Сбросить фильтры
              <Image
                src="/svg/refresh.svg"
                alt=""
                loading="lazy"
                width={18}
                height={18}
              />
            </div>
          </PrimaryButton>
        }
      />
    </div>
  );
};
