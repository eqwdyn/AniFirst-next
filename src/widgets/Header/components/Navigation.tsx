"use client";

import { AnimatedLink } from "@/shared/ui/AnimatedLink";
import { usePathname } from "next/navigation";
import { getLang } from "@shared/utils/getLang";

export const Navigation = () => {
  const pathname = usePathname();
  const lang = getLang();
  return (
    <>
      <AnimatedLink isActive={pathname === "/"} href="/">
        {lang === "ru" ? "Главная " : "Browse"}
      </AnimatedLink>
      <AnimatedLink isActive={pathname === "/my-list"} href="/my-list">
        {lang === "ru" ? "Избранное" : "My List"}
      </AnimatedLink>
      <AnimatedLink
        isActive={pathname === "/anime/new-releases"}
        href="/anime/new-releases"
      >
        {lang === "ru" ? "Новое" : "New Releases"}
      </AnimatedLink>
      <AnimatedLink
        isActive={pathname === "/anime/genres"}
        href="/anime/genres"
      >
        {lang === "ru" ? "Жанры" : "Genres"}
      </AnimatedLink>
    </>
  );
};
