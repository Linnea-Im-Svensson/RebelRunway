import type { Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { api } from "~/utils/api";

type FilterOptions = "price" | "color" | "brand" | "category";

type FilterProps = {
  title: string;
  type: FilterOptions;
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
};

const FilterType = ({ title, type, setFilteredProducts }: FilterProps) => {
  const [filterOptions, setFilterOptions] = useState(false);
  const [minRangeValue, setMinRangeValue] = useState(10);
  const [maxRangeValue, setMaxRangeValue] = useState(1000);

  const filterByPrice = api.product.getFilteredProducts.useQuery(
    {
      minPrice: minRangeValue,
      maxPrice: maxRangeValue,
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

  const handlePriceFilter = () => {
    console.log(minRangeValue, maxRangeValue);
    filterByPrice
      .refetch()
      .then((data) => setFilteredProducts(data.data ?? []));
    if (filterByPrice.isSuccess) {
      setFilteredProducts(filterByPrice.data);
    }
  };

  return (
    <div
      onClick={() => setFilterOptions(!filterOptions)}
      className="relative flex min-w-[80px] cursor-pointer items-center justify-between rounded-t-lg bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-200"
    >
      <p>{title}</p>
      {filterOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

      {filterOptions && (
        <>
          {type === "price" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute -bottom-[94px] left-0 z-10 h-[200] w-[300px] cursor-default rounded-b-lg rounded-r-lg bg-neutral-100 p-2 dark:bg-neutral-700 dark:text-neutral-200"
            >
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
                onMouseUp={handlePriceFilter}
                className="mt-4 w-full"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FilterType;
