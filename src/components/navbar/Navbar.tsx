import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { CategoryLinkInfo, LinkInfo } from "../../types/navbarTypes";
import CategoryLink from "./CategoryLink";
import SearchBar from "./SearchBar";
import SidebarNavModal from "./SidebarNavModal";
import Logo from "./Logo";
import ThemeToggleBtn from "../themes/ThemeToggleBtn";
import ThemeToggleBtnTwo from "../themes/ThemeToggleBtn";

const Navbar = () => {
  const { data: sessionData } = useSession();

  const [scrollPosition, setScrollPosition] = useState({
    y: 0,
    lastY: 1,
  });
  const [showChildLinks, setShowChildLinks] = useState<boolean>(false);
  const [currentChildLinks, setCurrentChildLinks] = useState<LinkInfo[] | null>(
    null,
  );
  const [showSideChildLinks, setShowSideChildLinks] = useState<boolean>(false);
  const [showLeftSideModal, setShowLeftSideModal] = useState<boolean>(false);
  const [showRightSideModal, setShowRightSideModal] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition((prev) => {
        return {
          y: window.scrollY,
          lastY: prev.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // move this object to another file later when redux/ctx is added
  const navCategories: CategoryLinkInfo[] = [
    {
      title: "New",
      link: "/new",
    },
    {
      title: "Clothes",
      link: "/clothes",
      childLinks: [
        { title: "Dresses", link: "/clothes/dresses" },
        { title: "Skirts", link: "/clothes/skirts" },
        { title: "Pants", link: "/clothes/pants" },
        { title: "Shirts", link: "/clothes/shirts" },
        { title: "Blouses", link: "/clothes/blouses" },
      ],
      setShowState: setShowChildLinks,
      setChildLinks: setCurrentChildLinks,
      setSideShowState: setShowSideChildLinks,
    },
    {
      title: "Shoes",
      link: "/shoes",
      childLinks: [
        { title: "Sneakers", link: "/shoes/sneakers" },
        { title: "Boots", link: "/shoes/boots" },
        { title: "Flats", link: "/shoes/flats" },
        { title: "Heels", link: "/shoes/heels" },
      ],
      setShowState: setShowChildLinks,
      setChildLinks: setCurrentChildLinks,
      setSideShowState: setShowSideChildLinks,
    },
    {
      title: "Sport",
      link: "/sport",
      childLinks: [
        { title: "Tops", link: "/sport/tops" },
        { title: "Tights", link: "/sport/tights" },
      ],
      setShowState: setShowChildLinks,
      setChildLinks: setCurrentChildLinks,
      setSideShowState: setShowSideChildLinks,
    },
    {
      title: "Brands",
      link: "/brands",
    },
    {
      title: "Outlet",
      link: "/outlet",
    },
  ];

  return (
    <>
      <nav className="sticky top-0 flex h-fit w-full flex-col">
        {/* first row container*/}
        <div
          onMouseEnter={() => setShowChildLinks(false)}
          className="z-20 flex h-14 w-full items-center justify-between bg-white px-6 py-2 dark:bg-black dark:text-slate-100 md:px-10"
        >
          {/* left group container hamburgermenu/logo/searchbar */}
          <div className="flex items-center justify-center gap-4">
            <RxHamburgerMenu
              size={40}
              onClick={() => setShowLeftSideModal((prev) => !prev)}
              className="hover:cursor-pointer"
            />
            <Logo />
            <div className="hidden w-80 md:block">
              <SearchBar />
            </div>
          </div>
          {/* right group container login/favourite/cart*/}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <ThemeToggleBtn />
              <p className="hidden lg:block">
                {sessionData?.user ? sessionData.user.name : "Login"}
              </p>
              <FaRegUserCircle
                size={30}
                onClick={() => {
                  sessionData?.user ? signOut() : signIn();
                }}
              />
            </div>
            <BiHeart size={30} />
            <BiShoppingBag
              size={30}
              className="hover:cursor-pointer"
              onClick={() => setShowRightSideModal((prev) => !prev)}
            />
          </div>
        </div>
        {/* hidden middle row searchbar */}
        <div
          className={`block h-14 w-full border-b-2 border-slate-200 bg-white px-2 transition-all dark:border-slate-800 dark:bg-black md:hidden ${
            scrollPosition.y > scrollPosition.lastY &&
            !showChildLinks &&
            " -translate-y-[97%]"
          }`}
        >
          <SearchBar />
        </div>
        {/* second row container. categories*/}
        <div
          className={`relative h-14 px-10  ${
            scrollPosition.y > scrollPosition.lastY &&
            !showChildLinks &&
            " -translate-y-[97%]"
          } hidden w-full items-center justify-start gap-6 border-b-2 border-b-slate-200 bg-white transition-all dark:border-b-slate-800 dark:bg-black dark:text-slate-100 md:flex `}
        >
          {navCategories.map((category) => (
            <CategoryLink key={category.title} {...category} />
          ))}
        </div>
        {/* drop down category nav */}
        {showChildLinks && (
          <div
            className="fixed top-28 flex h-fit w-full -translate-y-1 gap-6 border-y-2 border-slate-200 bg-white px-10 dark:border-slate-800 dark:bg-black dark:text-slate-100"
            onMouseEnter={() => setShowChildLinks(true)}
            onMouseLeave={() => setShowChildLinks(false)}
          >
            {currentChildLinks !== null &&
              currentChildLinks.map((child) => (
                <CategoryLink
                  key={child.title}
                  {...child}
                  setChildLinks={setCurrentChildLinks}
                  setShowState={setShowChildLinks}
                />
              ))}
          </div>
        )}
      </nav>
      {/* left sidebar menu modal */}
      <SidebarNavModal
        showSideModal={showLeftSideModal}
        setShowSideModal={setShowLeftSideModal}
        position="left"
        categoryLink={navCategories}
        showSideChildLinks={showSideChildLinks}
        setShowSideChildLinks={setShowSideChildLinks}
        currentChildLinks={currentChildLinks}
      />
      {/* right sidebar menu modal */}
      <SidebarNavModal
        showSideModal={showRightSideModal}
        setShowSideModal={setShowRightSideModal}
        position="right"
        showSideChildLinks={showSideChildLinks}
      />
    </>
  );
};

export default Navbar;
