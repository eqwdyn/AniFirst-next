"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { IUser } from "@entities/IUser.ent";
import { AuthService } from "@/services/AuthService";
import { ACCESS_TOKEN_SESSION_STORAGE_KEY } from "@shared/config";

// ТИП
export interface AuthContextValue {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
  isAuthorized: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

// ЗНАЧЕНИЕ
export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const logout = useCallback(() => {
    sessionStorage.removeItem(ACCESS_TOKEN_SESSION_STORAGE_KEY);
    setUser(null);
    setError(null);
  }, []);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setUser(await AuthService.me());
    } catch (e: unknown) {
      const message =
        e instanceof Error ? e.message : "Ошибка получения данных пользователя";
      if (message === "SESSION_EXPIRED") {
        sessionStorage.removeItem(ACCESS_TOKEN_SESSION_STORAGE_KEY);
        setUser(null);
      }
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      error,
      isAuthorized: !!user,
      fetchUser,
      logout,
    }),
    [user, isLoading, error, fetchUser, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
