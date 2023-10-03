import Link from "next/link";
import { CategoryLinkInfo } from "../../types/navbarTypes";
import { AiOutlineDown } from "react-icons/ai";

const CategoryLink = ({
  link,
  title,
  childLinks,
  setShowState,
  setChildLinks,
  setSideShowState,
  isSideNavbar,
}: CategoryLinkInfo) => {
  const content = (
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
  );
  return isSideNavbar ? (
    <button
      onClick={() => {
        setSideShowState && setSideShowState(true);
        setChildLinks && childLinks && setChildLinks(childLinks);
      }}
      className="border-b-2 border-amber-200"
    >
      {content}
    </button>
  ) : (
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
      className={`${isSideNavbar && "border-b-2 border-amber-200"}`}
    >
      {content}
    </Link>
  );
};

export default CategoryLink;
