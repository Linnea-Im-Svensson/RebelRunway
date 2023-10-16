import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="relative h-10 w-full">
      <input
        type="text"
        className="h-full w-full rounded-lg bg-slate-200 p-2 dark:bg-neutral-700"
      />
      <BsSearch
        size={25}
        className="absolute right-2 top-[50%] -translate-y-[50%] "
      />
    </div>
  );
};

export default SearchBar;
