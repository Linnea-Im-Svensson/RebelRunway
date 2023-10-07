import { useState } from "react";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

const DropDownMenu = () => {
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const { setTheme } = useTheme();

  return (
    <div
      className="relative flex h-10 w-fit flex-col items-center justify-center"
      onClick={() => setShowMenuOptions((prev) => !prev)}
    >
      <BsSun />
      {showMenuOptions && (
        <div className="absolute -left-16 top-0 z-40 flex flex-col items-center justify-start rounded-md  bg-slate-300 text-black">
          <button
            onClick={() => setTheme("light")}
            className="w-full rounded-t-md p-2 hover:bg-slate-400"
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="w-full rounded-b-md p-2 hover:bg-slate-400"
          >
            Dark
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
