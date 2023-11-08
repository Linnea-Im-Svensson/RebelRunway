const FilterTypeCard = ({ children }: any) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute -bottom-[94px] left-0 z-10 h-[200] w-[300px] cursor-default rounded-b-lg rounded-r-lg bg-neutral-100 p-2 dark:bg-neutral-700 dark:text-neutral-200"
    >
      {children}
    </div>
  );
};

export default FilterTypeCard;
