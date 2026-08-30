"use client";

import cl from "./BurgerButton.module.css";
import Image from "next/image";

export const BurgerButton = () => {
  const openBurger = () => {
    console.log("Open Burger");
  };
  return (
    <button onClick={openBurger} className={cl.button}>
      <Image
        src="/svg/burger.svg"
        alt="Open burger menu"
        width={18}
        height={18}
        loading="lazy"
      />
    </button>
  );
};
