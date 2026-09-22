import type { Dispatch, FC, SetStateAction } from "react";
import cl from "./FilterList.module.css";
import { FilterTag } from "../components/FilterTag";

interface Props {
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}

export const FilterList: FC<Props> = ({ activeFilters, setActiveFilters }) => {
  return activeFilters.length > 0 ? (
    <div className={cl.filtersList}>
      <span className={cl.activeFiltersSpan}>Активные фильтры: </span>{" "}
      {activeFilters.map((tag) => (
        <FilterTag
          key={tag}
          label={tag}
          onRemove={(label: string) => {
            setActiveFilters((prev) => prev.filter((v) => v !== label));
          }}
        />
      ))}
    </div>
  ) : null;
};
