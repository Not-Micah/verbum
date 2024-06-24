// FilterCard
"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { titleCase, StateFunction } from "@/data";

interface FilterCardProps {
  id: string,
  idValue: string,
  setFilterActive: StateFunction
}

const FilterCard: React.FC<FilterCardProps> = ({ id, idValue, setFilterActive }) => {
  const router = useRouter();

  const toggleValueOfChar = () => {
    setFilterActive((prevState) => {
      return { ...prevState, [idValue]: false };
    });
  };

  const createQueryString = useCallback((id: string) => {
    const params = new URLSearchParams(window.location.search);
    params.delete(id, idValue);

    return params.toString();
  }, []);

  return (
    <div className="flex flex-row items-center justify-start gap-3 bg-gray-100 shadow-lg rounded-lg py-2 pr-7 pl-4">
      <div
        onClick={() => {
          toggleValueOfChar();
          router.push(`/verses?${createQueryString(id)}`);
        }}
      >
        <FaRegCircleXmark className="text-red-500 text-lg" />
      </div>
      <p className="font-body dynamic-label">{titleCase(idValue)}</p>
    </div>
  );
};

export default FilterCard;