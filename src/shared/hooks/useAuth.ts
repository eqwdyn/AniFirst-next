import { useEffect, useState, useCallback } from "react";
import { IUser } from "@entities/IUser.ent";
import { AuthService } from "@services/AuthService";

export function useAuth() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      //   const token = sessionStorage.getItem(ACCESS_TOKEN_SESSION_STORAGE_KEY);
      //   console.log("Attempting to fetch user with token:", token); // Добавляем логирование

      //   if (!token) {
      //     setUser(null);
      //     return;
      //   }

      const userData = await AuthService.me();
      setUser(userData);
    } catch (e: any) {
      console.error("Error fetching user:", e); // Добавляем логирование ошибки
      if (e.message === "SESSION_EXPIRED") {
        sessionStorage.clear();
        setUser(null);
      }
      setError(e.message || "Ошибка получения данных пользователя");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const logout = useCallback(() => {
    sessionStorage.clear();
    setUser(null);
  }, []);

  const isAuthorized = !!user;

  return {
    isLoading,
    user,
    isAuthorized,
    error,
    fetchUser,
    logout,
  };
}
