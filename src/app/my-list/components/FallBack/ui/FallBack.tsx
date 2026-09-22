import cl from "./FallBack.module.css";
import { FallBack as FallBackComponent } from "@widgets/FallBack";

interface Props {}

export const FallBack = () => {
  return (
    <div className={cl.wrapper}>
      <FallBackComponent
        description={
          <>
            Пока что вы ничего не добавили в список избранного.
            <br />
            Самое время это исправить!
          </>
        }
      />
    </div>
  );
};
