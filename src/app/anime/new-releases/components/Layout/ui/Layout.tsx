import { FC, PropsWithChildren } from "react";
import cl from "./Layout.module.css";
import { PageWrapper } from "@/shared/ui/PageWrapper";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageWrapper>
      <div className={cl.pageWrapper}>{children}</div>
    </PageWrapper>
  );
};
