import { Product } from "@prisma/client";
import FilterType from "./FilterType";

type FilterProps = {
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
};

const Filter = ({ setFilteredProducts }: FilterProps) => {
  return (
    <div className="flex w-full items-center justify-center gap-6 ">
      <FilterType
        setFilteredProducts={setFilteredProducts}
        title="Price"
        type="price"
      />
      <button
        onClick={() => setFilteredProducts(null)}
        className="text-sm text-neutral-600 dark:text-neutral-300"
      >
        Clear filter
      </button>
    </div>
  );
};

export default Filter;
