import { PropsWithChildren, ReactNode } from "react";
import cl from "./ContentSection.module.css";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";

interface Props extends PropsWithChildren {
  titleId: string;
  title: string;
  description?: string;
  urlToAll?: string;
  titleGap?: number;
  navigationBlock?: ReactNode;
}

export const ContentSection = ({
  titleId,
  title,
  description,
  urlToAll,
  titleGap,
  children,
  navigationBlock,
}: Props) => {
  return (
    <section aria-labelledby={titleId} className={cl.container}>
      <header
        className={cl.headerBlock}
        style={{ marginBottom: titleGap ?? undefined }}
      >
        {urlToAll ? (
          <NotStyledLink href={urlToAll}>
            <div className={cl.titleContent}>
              <h2 id={titleId} className={cl.title}>
                {title}
              </h2>
              {description ? (
                <p className={cl.description}>{description}</p>
              ) : null}
            </div>
          </NotStyledLink>
        ) : (
          <div className={cl.titleContent}>
            <h2 id={titleId} className={cl.title}>
              {title}
            </h2>
            {description ? (
              <p className={cl.description}>{description}</p>
            ) : null}
          </div>
        )}
        <div className={cl.navigationButtons}>{navigationBlock}</div>
      </header>

      {children}
    </section>
  );
};
