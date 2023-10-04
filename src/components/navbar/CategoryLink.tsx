import Link from "next/link";
import { CategoryLinkInfo } from "../../types/navbarTypes";
import { AiOutlineDown } from "react-icons/ai";
import CategoryChildLink from "./CategoryChildLink";

const CategoryLink = ({
  link,
  title,
  childLinks,
  setShowState,
  setChildLinks,
  setSideShowState,
  isSideNavbar,
}: CategoryLinkInfo) => {
  return isSideNavbar ? (
    childLinks ? (
      <button
        onClick={() => {
          setSideShowState && setSideShowState(true);
          setChildLinks && childLinks && setChildLinks(childLinks);
        }}
        className="border-b-2 border-amber-200 dark:border-slate-900"
      >
        <div
          className={`flex h-[57px] w-full items-center gap-2 border-none  px-2`}
        >
          <p className="border-b-2 border-transparent hover:border-b-2 hover:border-slate-200">
            {title}
          </p>
          {childLinks && (
            <>
              <AiOutlineDown size={12} className="ml-auto" />
            </>
          )}
        </div>
      </button>
    ) : (
      <CategoryChildLink
        link={link}
        title={title}
        childLinks={childLinks}
        isSideNavbar={isSideNavbar}
        setSideShowState={setSideShowState}
      />
    )
  ) : (
    <CategoryChildLink
      link={link}
      title={title}
      childLinks={childLinks}
      setChildLinks={setChildLinks}
      setShowState={setShowState}
    />
  );
};

export default CategoryLink;
