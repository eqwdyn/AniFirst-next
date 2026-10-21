"use client";

import { useState } from "react";
import { PasswordToggleIcon } from "../components/PasswordToggleIcon";
import { GenericForm } from "@shared/ui/GenericForm";
import cl from "./AuthForm.module.css";
import { NotStyledLink } from "@shared/ui/NotStyledLink";

export const AuthForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("Без логики");
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
          errorMessage: error,
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
          errorMessage: error,
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
    />
  );
};
