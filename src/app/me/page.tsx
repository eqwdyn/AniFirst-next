"use client";

import { Show } from "@shared/ui/Show";
import { PageLayout } from "./components/Layout";
import { useAuth } from "@shared/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isLoading, user, error, isAuthorized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthorized && !isLoading) {
      router.push("/auth/login");
    }
  }, [isLoading, isAuthorized]);

  return (
    <PageLayout>
      <Show when={isAuthorized}>{user?.login}</Show>
      <Show when={isLoading}>Loading</Show>
    </PageLayout>
  );
}
