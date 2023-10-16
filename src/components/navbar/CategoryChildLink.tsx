import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { CategoryLinkInfo } from "~/types/navbarTypes";

const CategoryChildLink = ({
  link,
  title,
  childLinks,
  setShowState,
  setChildLinks,
  setSideShowState,
  isSideNavbar,
}: CategoryLinkInfo) => {
  return (
    <Link
      onMouseEnter={() => {
        if (!isSideNavbar && childLinks && setChildLinks && setShowState) {
          setShowState(true);
          setChildLinks(childLinks);
        } else if (isSideNavbar && childLinks && setSideShowState) {
          setSideShowState(true);
        }
      }}
      href={link}
      className={`${
        isSideNavbar && "border-b-2 border-neutral-200 dark:border-neutral-900"
      }`}
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
    </Link>
  );
};

export default CategoryChildLink;
