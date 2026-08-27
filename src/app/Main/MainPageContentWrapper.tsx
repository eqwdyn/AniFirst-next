import type { FC, PropsWithChildren } from "react";

export const MainPageContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 64,
        paddingTop: 48,
        paddingBottom: 80,
      }}
    >
      {children}
    </div>
  );
};
