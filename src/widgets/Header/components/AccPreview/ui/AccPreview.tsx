"use client";

import Image from "next/image";
import cl from "./AccPreview.module.css";

export const AccPreview = () => {
  return (
    <div className={cl.container}>
      <Image
        src="/Avatar.png"
        width={36}
        height={36}
        alt="logo"
        loading="lazy"
        className={cl.avatar}
      />
      <p className={cl.login}>Sora</p>
    </div>
  );
};
