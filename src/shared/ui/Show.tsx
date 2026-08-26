import type { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  when: boolean;
}

export const Show: FC<Props> = ({ when, children }) => {
  if (!when) {
    return <></>;
  }

  return children;
};
