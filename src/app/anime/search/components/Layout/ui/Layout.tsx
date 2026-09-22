import { FC, PropsWithChildren } from "react";
import cl from "./Layout.module.css";
import { PageWrapper } from "@/shared/ui/PageWrapper";

const SearchLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageWrapper>
      <div className={cl.pageWrapper}>{children}</div>
    </PageWrapper>
  );
};

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <div className={cl.content}>{children}</div>;
};
const DropBoxes: FC<PropsWithChildren> = ({ children }) => {
  return <div className={cl.dropBoxes}>{children}</div>;
};

export const SearchPageLayout = Object.assign(SearchLayout, {
  Content,
  DropBoxes,
});
