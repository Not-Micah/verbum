"use client";

import React, { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import CheckSelect from "./CheckSelect";
import { CharActiveType, StateFunction, CheckData } from "@/data";

interface Generic {
  label: string;
  values: string[];
  active: Record<string, unknown>;
}

interface CheckCardProps {
  checkBoxes: Generic,
  filterActive: CharActiveType,
  setFilterActive: StateFunction,
  title: string,
}

const CheckCard: React.FC<CheckCardProps> = ({ checkBoxes, filterActive, setFilterActive, title }) => {
  const [visible, changeVisibility] = useState(false);

  const toggleVisibility = () => {
    changeVisibility(!visible);
  };

  return (
    <div className="px-5 py-3 bg-gray-100 w-full rounded-md gradient-blue shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h3 className="dynamic-text">{title}</h3>
        <div onClick={toggleVisibility} className="dynamic-label text-white w-full flex justify-end">
          {visible ? <FaCircleMinus /> : <FaCirclePlus />}
        </div>
      </div>
      <div className={`overflow-hidden ${visible ? "h-auto" : "h-0"}`}>
        {(checkBoxes.values as string[]).map((value, index) => (
          <CheckSelect
            key={index}
            label={checkBoxes.label}
            value={value}
            filterActive={filterActive}
            setFilterActive={setFilterActive}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckCard;
