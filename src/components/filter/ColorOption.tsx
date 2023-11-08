import { FilterOptions } from "./Filter";

type ColorOptionProps = {
  bgColor: string;
  color:
    | "black"
    | "white"
    | "red"
    | "blue"
    | "yellow"
    | "green"
    | "gray"
    | "pink";
  filterOptions: FilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
  setShowFilterOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

const ColorOption = ({
  bgColor,
  color,
  setFilterOptions,
  filterOptions,
  setShowFilterOptions,
}: ColorOptionProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-5 w-5 rounded-full ${bgColor}`}></div>
      <input
        type="radio"
        name="color"
        id="color"
        value={color}
        onChange={(e) => (
          setFilterOptions({ ...filterOptions, color: color }),
          setShowFilterOptions(false)
        )}
        defaultChecked={filterOptions.color === color}
      />
    </div>
  );
};

export default ColorOption;
