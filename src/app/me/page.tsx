"use client";

import { Show } from "@shared/ui/Show";
import { PageLayout } from "./components/Layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../../shared/providers/AuthProvider";

export default function Home() {
  const { isLoading, user, isAuthorized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthorized && isLoading === false) {
      router.push("/auth/login");
    }
  }, [isLoading, isAuthorized]);

  return (
    <PageLayout>
      <Show when={isAuthorized}>{user?.login}</Show>
      <Show when={!!isLoading}>Loading</Show>
    </PageLayout>
  );
}
