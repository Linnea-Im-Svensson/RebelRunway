import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import FilterTypeCard from "./FilterTypeCard";
import ColorOption from "./ColorOption";
import { FilterOptions } from "./Filter";

type FilterCategoryOptions = "price" | "color" | "brand" | "category";

type FilterProps = {
  title: string;
  type: FilterCategoryOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
  filterOptions: FilterOptions;
};

const FilterType = ({
  title,
  type,
  setFilterOptions,
  filterOptions,
}: FilterProps) => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [minRangeValue, setMinRangeValue] = useState(10);
  const [maxRangeValue, setMaxRangeValue] = useState(1000);

  return (
    <div
      onClick={() => setShowFilterOptions(!showFilterOptions)}
      className="relative flex min-w-[80px] cursor-pointer items-center justify-between rounded-t-lg bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-200"
    >
      <p>{title}</p>
      {showFilterOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

      {showFilterOptions && (
        <>
          {type === "price" && (
            <FilterTypeCard>
              <div className="flex w-full items-center justify-between">
                <div className="flex min-w-[80px] items-center justify-center bg-neutral-300 p-2 dark:bg-neutral-600">
                  {minRangeValue}:-
                </div>
                <p className="h-[1px] w-10 bg-neutral-200"></p>
                <div className="flex min-w-[80px] items-center justify-center bg-neutral-300 p-2 dark:bg-neutral-600">
                  {maxRangeValue}:-
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={1000}
                step={10}
                value={minRangeValue}
                onChange={(e) => setMinRangeValue(+e.target.value)}
                onMouseUp={() => (
                  setFilterOptions({
                    ...filterOptions,
                    maxPrice: maxRangeValue,
                    minPrice: minRangeValue,
                  }),
                  setShowFilterOptions(false)
                )}
                className="mt-4 w-full"
              />
            </FilterTypeCard>
          )}
          {type === "color" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute -bottom-[120px] left-0 z-10 grid h-[200] w-[300px] cursor-default grid-cols-2 gap-2 rounded-b-lg rounded-r-lg bg-neutral-100 p-2 dark:bg-neutral-700 dark:text-neutral-200"
            >
              <ColorOption
                bgColor="bg-red-500"
                color="red"
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
                setShowFilterOptions={setShowFilterOptions}
              />
              <ColorOption
                bgColor="bg-blue-500"
                color="blue"
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
                setShowFilterOptions={setShowFilterOptions}
              />
              <ColorOption
                bgColor="bg-yellow-500"
                color="yellow"
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
                setShowFilterOptions={setShowFilterOptions}
              />
              <ColorOption
                bgColor="bg-green-500"
                color="green"
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
                setShowFilterOptions={setShowFilterOptions}
              />
              <ColorOption
                bgColor="bg-black"
                color="black"
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
                setShowFilterOptions={setShowFilterOptions}
              />
              <ColorOption
                bgColor="bg-white"
                color="white"
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
                setShowFilterOptions={setShowFilterOptions}
              />
              <ColorOption
                bgColor="bg-red-200"
                color="pink"
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
                setShowFilterOptions={setShowFilterOptions}
              />
              <ColorOption
                bgColor="bg-neutral-500"
                color="gray"
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
                setShowFilterOptions={setShowFilterOptions}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FilterType;
