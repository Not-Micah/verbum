"use client";

import { useState } from "react";
import CheckCard from "./CheckCard";
import { CharActiveType, titleCase, Filter2D, filterData, keys } from "@/data";
import FilterCard from "./FilterCard";

const SideBar = () => {
  function generateInitialState(array: string[]) {
    const result: { [key: string]: boolean } = {};
    array.forEach((value) => {
      result[value] = false;
    });
    return result;
  }

  const [sectionActive, setSectionActive] = useState<CharActiveType>(
    generateInitialState(filterData.sections.values)
  );
  const [bookActive, setBookActive] = useState<CharActiveType>(
    generateInitialState(filterData.books.values)
  );
  const [topicActive, setTopicActive] = useState<CharActiveType>(
    generateInitialState(filterData.topics.values)
  );
  const [contextActive, setContextActive] = useState<CharActiveType>(
    generateInitialState(filterData.context.values)
  );
  const [charActive, setCharActive] = useState<CharActiveType>(
    generateInitialState(filterData.characters.values)
  );
  const [authorActive, setAuthorActive] = useState<CharActiveType>(
    generateInitialState(filterData.authors.values)
  );

  const filterControls: Filter2D = {
    section: { state: sectionActive, update: setSectionActive },
    book: { state: bookActive, update: setBookActive },
    topic: { state: topicActive, update: setTopicActive },
    context: { state: contextActive, update: setContextActive },
    character: { state: charActive, update: setCharActive },
    author: { state: authorActive, update: setAuthorActive },
  };

  return (
    <div className="flex justify-start gap-6 flex-col">
      <div className="rounded-container">
        <div className="filter-container gradient-gold">
          <p className="font-body w-full text-center dynamic-label py-2">
            Active Filters
          </p>
          <div className="flex flex-row justify-center gap-2 items-center flex-wrap">
            {keys.flatMap((key) =>
              Object.entries(filterControls[key].state).map(
                ([idValue, value]: [string, boolean]) =>
                  value && (
                    <FilterCard
                      key={`${key}-${idValue}`}
                      id={key}
                      idValue={idValue}
                      setFilterActive={filterControls[key].update}
                    />
                  )
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start gap-5 rounded-container">
        {Object.values(filterData).map((filter, index) => (
          <CheckCard
            key={index}
            checkBoxes={filter}
            filterActive={filterControls[keys[index]].state}
            setFilterActive={filterControls[keys[index]].update}
            title={titleCase(keys[index])}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
