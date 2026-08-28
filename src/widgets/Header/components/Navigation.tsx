"use client";

import { AnimatedLink } from "@/shared/ui/AnimatedLink";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatedLink isActive={pathname === "/"} href="/">
        Browse
      </AnimatedLink>
      <AnimatedLink isActive={pathname === "/my-list"} href="/my-list">
        My List
      </AnimatedLink>
      <AnimatedLink
        isActive={pathname === "/new-releases"}
        href="/new-releases"
      >
        New Releases
      </AnimatedLink>
      <AnimatedLink isActive={pathname === "/genres"} href="/genres">
        Genres
      </AnimatedLink>
    </>
  );
};
