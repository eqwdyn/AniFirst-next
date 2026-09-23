import type { FC } from "react";
import cl from "./FilterList.module.css";
import { FilterTag } from "../components/FilterTag";

interface Item {
  label: string;
  onRemove: () => void;
}

interface Props {
  activeFilters: Item[];
}

export const FilterList: FC<Props> = ({ activeFilters }) => {
  return activeFilters.length > 0 ? (
    <div className={cl.filtersList}>
      <span className={cl.activeFiltersSpan}>Активные фильтры: </span>{" "}
      {activeFilters.map((tag) => (
        <FilterTag key={tag.label} label={tag.label} onRemove={tag.onRemove} />
      ))}
    </div>
  ) : null;
};
