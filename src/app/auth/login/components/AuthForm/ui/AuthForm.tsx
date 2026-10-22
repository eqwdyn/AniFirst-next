"use client";

import { useState } from "react";
import { PasswordToggleIcon } from "../components/PasswordToggleIcon";
import { GenericForm } from "@shared/ui/GenericForm";
import cl from "./AuthForm.module.css";
import { NotStyledLink } from "@shared/ui/NotStyledLink";
import { AuthService } from "@/services/AuthService";
import { useRouter } from "next/navigation";

export const AuthForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateHandle = () => {
    if (!login.trim()) {
      setNameError("Введите имя пользователя");
      return false;
    }

    if (login.trim().length < 4) {
      setNameError("Имя пользователя должно содержать минимум 4 символа");
      return false;
    }

    if (!password.trim()) {
      setPasswordError("Введите пароль");
      return false;
    }

    if (password.trim().length < 6) {
      setPasswordError("Пароль должен содержать минимум 6 символов");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameError("");
    setPasswordError("");

    const provedValidate = validateHandle();
    if (!provedValidate) return;

    setIsLoading(true);
    try {
      await AuthService.login({ login, password });
      router.push("/me");
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <GenericForm
      title="Вход в AniOne"
      subTitle="Продолжайте смотреть любимое аниме и возвращайтесь к своему списку."
      fields={[
        {
          value: login,
          setValue: setLogin,
          inputId: "login",
          inputType: "text",
          label: "Логин",
          inputPlaceholder: "Введите логин",
          required: true,
          errorMessage: nameError,
        },
        {
          value: password,
          setValue: setPassword,
          inputId: "password",
          inputType: showPassword ? "text" : "password",
          label: "Пароль",
          inputPlaceholder: "Введите пароль",
          required: true,
          slot: (
            <button
              type="button"
              onClick={togglePassword}
              className={cl.togglePassword}
              aria-label="Показать/скрыть пароль"
              aria-pressed={showPassword}
            >
              <PasswordToggleIcon isVisible={showPassword} />
            </button>
          ),
          errorMessage: passwordError,
        },
      ]}
      handleSubmit={handleSubmit}
      formFooterSlot={
        <div className={cl.options}>
          <NotStyledLink href="/help/reset-password" className={cl.link}>
            Забыли пароль?
          </NotStyledLink>
        </div>
      }
      footerSlot={
        <p className={cl.footer}>
          Нет аккаунта?{" "}
          <NotStyledLink href="/auth/register" className={cl.link}>
            Зарегистрироваться
          </NotStyledLink>
        </p>
      }
      submitButtonText="Войти"
      submitButtonDisabled={isLoading}
    />
  );
};
