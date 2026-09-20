import cl from "./MockSearchBar.module.css";
import Image from "next/image";

interface Props {
  className?: string;
  placeholder: string;
}

export const MockSearchBar = ({ className, placeholder }: Props) => {
  return (
    <div className={className ? `${cl.wrapper} ${className}` : cl.wrapper}>
      <div className={cl.searchButton}>
        <Image
          src="/svg/search.svg"
          width={16}
          height={16}
          loading="lazy"
          alt=""
        />
      </div>

      <span className={cl.input}>{placeholder}</span>
    </div>
  );
};
