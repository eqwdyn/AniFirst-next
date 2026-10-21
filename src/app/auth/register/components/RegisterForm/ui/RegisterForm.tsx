"use client";

import { useState } from "react";
import { PasswordToggleIcon } from "../components/PasswordToggleIcon";
import { GenericForm } from "@shared/ui/GenericForm";
import cl from "./RegisterForm.module.css";
import { NotStyledLink } from "@shared/ui/NotStyledLink";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkBoxError, setCheckBoxError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const validateHandle = () => {
    if (!username.trim()) {
      setNameError("Введите имя пользователя");
      return false;
    }

    if (username.trim().length < 4) {
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

    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают. Проверьте ввод");
      return false;
    }

    if (!termsAccepted) {
      setCheckBoxError(
        "Необходимо принять условия использования и политику конфиденциальности",
      );
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameError("");
    setPasswordError("");
    setCheckBoxError("");

    if (!validateHandle()) return;

    setNameError("ASDASDASD");
    // setError("");
    // TODO: логика регистрации
  };

  return (
    <GenericForm
      title="Регистрация"
      subTitle="Создайте аккаунт AniFirst, чтобы сохранять аниме и следить за новыми сериями."
      fields={[
        {
          value: username,
          setValue: setUsername,
          inputId: "username",
          inputType: "text",
          label: "Имя пользователя",
          inputPlaceholder: "Придумайте имя",
          errorMessage: nameError,
        },
        {
          value: password,
          setValue: setPassword,
          inputId: "password",
          inputType: showPassword ? "text" : "password",
          label: "Пароль",
          inputPlaceholder: "Придумайте пароль",
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
        {
          value: confirmPassword,
          setValue: setConfirmPassword,
          inputId: "confirmPassword",
          inputType: showConfirmPassword ? "text" : "password",
          label: "Подтверждение пароля",
          inputPlaceholder: "Повторите пароль",
          slot: (
            <button
              type="button"
              onClick={toggleConfirmPassword}
              className={cl.togglePassword}
              aria-label="Показать/скрыть подтверждение пароля"
              aria-pressed={showConfirmPassword}
            >
              <PasswordToggleIcon isVisible={showConfirmPassword} />
            </button>
          ),
          errorMessage: passwordError,
        },
      ]}
      handleSubmit={handleSubmit}
      formFooterSlot={
        <div className={cl.termsWrapper}>
          <div className={cl.termsCheckbox}>
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className={cl.checkbox}
              aria-label="Принять условия использования и политику конфиденциальности"
            />
            <label htmlFor="terms" className={cl.termsLabel}>
              Я принимаю{" "}
              <NotStyledLink href="/policy/usage" className={cl.link}>
                условия использования
              </NotStyledLink>{" "}
              и{" "}
              <NotStyledLink href="/policy/confidance" className={cl.link}>
                политику конфиденциальности
              </NotStyledLink>
            </label>
          </div>
          <span className={cl.errorLabel}>{checkBoxError}</span>
        </div>
      }
      footerSlot={
        <p className={cl.footer}>
          Уже есть аккаунт?{" "}
          <NotStyledLink href="/auth/login" className={cl.link}>
            Войти
          </NotStyledLink>
        </p>
      }
      submitButtonText="Создать аккаунт"
    />
  );
};
