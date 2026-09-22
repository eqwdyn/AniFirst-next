import cl from "./FallBack.module.css";
import { FallBack as FallBackComponent } from "@widgets/FallBack";

interface Props {}

export const FallBack = () => {
  return (
    <div className={cl.wrapper}>
      <FallBackComponent description="Мы не смогли найти аниме, соответствующие вашему поиску." />
    </div>
  );
};
