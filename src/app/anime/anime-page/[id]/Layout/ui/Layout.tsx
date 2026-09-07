import { FC, PropsWithChildren } from "react";
import cl from "./Layout.module.css";
import Image from "next/image";
import { PageWrapper } from "@/shared/ui/PageWrapper";

const AnimePageLayoutRoot: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageWrapper>
      <div className={cl.pageWrapper}>{children}</div>
    </PageWrapper>
  );
};

const BgImage = ({ src }: { src: string }) => {
  return (
    <div className={cl.secondBgWrapper}>
      <div className={cl.bgImageWrapper}>
        <Image
          src={src}
          alt=""
          loading="eager"
          sizes="2000"
          fill
          className={cl.bgImage}
        />
      </div>
    </div>
  );
};
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={cl.layoutWrapper}>{children}</div>;
};
const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={cl.content}>{children}</div>;
};
const Aside = ({ children }: { children: React.ReactNode }) => {
  return <aside className={cl.aside}>{children}</aside>;
};

export const AnimePageLayout = Object.assign(AnimePageLayoutRoot, {
  LayoutWrapper,
  Content,
  BgImage,
  Aside,
});
