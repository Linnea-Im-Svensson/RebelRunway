import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeToggleBtn = () => {
  const { setTheme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<
    "light" | "dark" | undefined
  >();

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme === "light" || localStorageTheme === "dark") {
      setCurrentTheme(localStorageTheme);
    } else {
      setCurrentTheme(systemTheme);
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);

    setCurrentTheme(newTheme);
  };

  return (
    <div
      className={`items-center" justify-start" flex h-8 w-14 rounded-2xl bg-slate-200 transition-all dark:bg-neutral-700 ${
        currentTheme === "light" ? "pr-6" : "pl-6"
      }`}
    >
      {currentTheme === "light" ? (
        <FaMoon
          className="m-1 h-6 w-6 cursor-pointer rounded-full border-2 border-black p-1"
          onClick={handleThemeChange}
        />
      ) : (
        <BsSun
          className="m-1 h-6 w-6 cursor-pointer rounded-full bg-black p-1"
          onClick={handleThemeChange}
        />
      )}
    </div>
  );
};

export default ThemeToggleBtn;
