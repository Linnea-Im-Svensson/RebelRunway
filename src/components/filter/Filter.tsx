import type { Category, Product, SubCategory } from "@prisma/client";
import FilterType from "./FilterType";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

type FilterProps = {
  setFilteredProducts: React.Dispatch<
    React.SetStateAction<Product[] | undefined>
  >;
  category?: Category;
  subCategory?: SubCategory;
};

export type FilterOptions = {
  category: Category | undefined;
  subCategory: SubCategory | undefined;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  color: string | undefined;
};

const Filter = ({
  setFilteredProducts,
  category,
  subCategory,
}: FilterProps) => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    category: category,
    subCategory: subCategory,
    minPrice: undefined,
    maxPrice: undefined,
    color: undefined,
  });

  const filterByOptions = api.product.getFilteredProducts.useQuery(
    {
      category: filterOptions?.category,
      subCategory: filterOptions?.subCategory,
      minPrice: filterOptions?.minPrice,
      maxPrice: filterOptions?.maxPrice,
      color: filterOptions?.color,
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
      refetchOnMount: true,
    },
  );

  const handleFilter = () => {
    filterByOptions
      .refetch()
      .then((data) => setFilteredProducts(data.data ?? []));
  };

  //trigger everytime category or subcategory changes
  useEffect(() => {
    setFilterOptions({
      category: category,
      subCategory: subCategory,
      color: undefined,
      minPrice: undefined,
      maxPrice: undefined,
    });
  }, [subCategory, category]);

  //trigger everytime filteroptions changes
  useEffect(() => {
    handleFilter();
  }, [filterOptions]);

  return (
    <div className="flex w-full items-center justify-start gap-6 ">
      <FilterType
        setFilterOptions={setFilterOptions}
        filterOptions={filterOptions}
        title="Color"
        type="color"
      />
      <FilterType
        setFilterOptions={setFilterOptions}
        filterOptions={filterOptions}
        title="Price"
        type="price"
      />
      <button
        onClick={() => (
          setFilteredProducts(undefined),
          setFilterOptions({
            category: category,
            subCategory: subCategory,
            minPrice: undefined,
            maxPrice: undefined,
            color: undefined,
          })
        )}
        className="text-sm text-neutral-600 dark:text-neutral-300"
      >
        Clear filter
      </button>
      <div className="flex items-center gap-4">
        {filterOptions.color && (
          <div
            className="flex cursor-pointer items-center gap-1 rounded-lg bg-neutral-300 p-2 text-sm dark:bg-neutral-700"
            onClick={() => {
              setFilterOptions({ ...filterOptions, color: undefined });
            }}
          >
            <div>{filterOptions.color}</div>
            <p>X</p>
          </div>
        )}
        {filterOptions.minPrice && filterOptions.minPrice > 1 && (
          <div
            className="flex cursor-pointer items-center gap-1 rounded-lg bg-neutral-300 p-2 text-sm dark:bg-neutral-700"
            onClick={() => {
              setFilterOptions({
                ...filterOptions,
                minPrice: undefined,
                maxPrice: undefined,
              });
            }}
          >
            <div>
              {filterOptions.minPrice} - {filterOptions.maxPrice}
            </div>
            <p>X</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
