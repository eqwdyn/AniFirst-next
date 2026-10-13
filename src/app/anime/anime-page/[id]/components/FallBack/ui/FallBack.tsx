import cl from "./FallBack.module.css";
import { FallBack as FallBackComponent } from "@widgets/FallBack";

export const FallBack = () => {
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
      />
    </div>
  );
};
