"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { titleCase } from "@/data";
import { CharActiveType, StateFunction } from "@/data";

const CheckSelect = ({
  label,
  value,
  filterActive,
  setFilterActive,
}: {
  label: string;
  value: string;
  filterActive: CharActiveType;
  setFilterActive: StateFunction;
}) => {
  const router = useRouter();

  ////////////////////////////////////////////
  const createQueryString = useCallback(
    () => {
      const params = new URLSearchParams(window.location.search);

      if (filterActive[value]) {
        params.delete(label, value);                                            
      } else {
        params.append(label, value);
      }
      return params.toString();
    },
    [filterActive[value]]
  );
  ////////////////////////////////////////////

  const toggleCheckbox = () => {
    setFilterActive((prevState) => {
      return { ...prevState, [value]: !prevState[value] };
    });
    router.push(`/verses?${createQueryString()}`);
  };

  return (
    <form className="flex flex-row items-center justify-start gap-5 max-w-sm p-2">
      <input
        type="checkbox"
        className="w-5 h-5"
        onChange={toggleCheckbox}
        checked={filterActive[value]}
      />
      <label className="dynamic-text">{titleCase(value)}</label>
    </form>
  );
};

export default CheckSelect;
