import { BsSearch } from "react-icons/bs";
import SearchBarModal from "./SearchBarModal";
import { useState } from "react";
import { api } from "~/utils/api";
import Link from "next/link";
import Loading from "../utils/Loading";

const SearchBar = () => {
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const test = "en bra dag";
  console.log(test.split(" ").join("&"));

  const { data, isLoading } = api.product.getSearchedProducts.useQuery({
    search: input,
  });

  return (
    <>
      <div
        className="relative h-10 w-full "
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          className={`h-full w-full ${
            showSearchModal && input !== "" && data?.length
              ? "rounded-t-lg border-b-2 border-neutral-800"
              : "rounded-lg"
          } bg-slate-200 p-2 outline-none dark:bg-neutral-700`}
          onFocus={() => setShowSearchModal(true)}
          //come up with a better solution for this later
          onBlur={() =>
            setTimeout(() => {
              setShowSearchModal(false);
            }, 100)
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Link
          href={input !== "" ? `/search/${input}` : ""}
          onClick={() => setInput("")}
        >
          {isLoading ? (
            <div className="absolute right-2 top-[50%] -translate-y-[50%] ">
              <Loading fillColor="fill-neutral-600" />
            </div>
          ) : (
            <BsSearch
              size={25}
              className="absolute right-2 top-[50%] -translate-y-[50%] "
            />
          )}
        </Link>
        {showSearchModal && <SearchBarModal products={data} search={input} />}
      </div>
    </>
  );
};

export default SearchBar;
