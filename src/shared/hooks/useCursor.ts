import { RefObject, useEffect } from "react";

interface Props {
  handle: () => void;
  ref: RefObject<HTMLLIElement | null>;
}

export function useCursor({ ref, handle }: Props) {
  return useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          handle();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [handle]);
}
