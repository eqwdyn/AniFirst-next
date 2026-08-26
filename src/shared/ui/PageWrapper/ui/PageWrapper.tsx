import type { FC, PropsWithChildren } from "react";
import cl from "./PageWrapper.module.css";

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <main className={cl.wrapper}>{children}</main>;
};
