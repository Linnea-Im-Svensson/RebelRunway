import { CategoryLinkInfo, LinkInfo } from "~/types/navbarTypes";
import CategoryLink from "./CategoryLink";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Logo from "./Logo";
import SideBarCart from "./SideBarCart";

type SidebarNavModalProps = {
  showSideModal: boolean;
  setShowSideModal: React.Dispatch<React.SetStateAction<boolean>>;
  position: "left" | "right";
  categoryLink?: CategoryLinkInfo[];
  showSideChildLinks: boolean;
  setShowSideChildLinks?: React.Dispatch<React.SetStateAction<boolean>>;
  currentChildLinks?: LinkInfo[] | null;
};

const SidebarNavModal = ({
  showSideModal,
  setShowSideModal,
  position,
  categoryLink,
  showSideChildLinks,
  setShowSideChildLinks,
  currentChildLinks,
}: SidebarNavModalProps) => {
  const { data: sessionData } = useSession();
  return (
    <>
      {/* transparent black background */}
      <div
        className={`${
          showSideModal ? "fixed" : "hidden"
        } left-0 top-0 h-screen w-screen bg-black bg-opacity-30`}
        onClick={(e) => (
          setShowSideModal(false),
          setShowSideChildLinks && setShowSideChildLinks(false)
        )}
      ></div>
      {/* white background modal */}
      <div
        className={`fixed bottom-0 z-10 flex h-screen w-screen translate-x-0 flex-col justify-between bg-neutral-100 dark:bg-neutral-800 dark:text-slate-100 sm:w-96 ${
          showSideModal
            ? position === "right"
              ? "right-0"
              : "left-0"
            : !showSideModal && position === "right"
            ? "-right-[150%]"
            : "-left-[150%]"
        } transition-all`}
      >
        <button
          onClick={() => setShowSideModal(false)}
          className={`absolute top-0 p-2 text-xl hover:cursor-pointer ${
            position === "left" ? "right-2" : "left-2"
          }`}
        >
          X
        </button>
        {/* Right side modal */}
        {position === "right" && <SideBarCart />}

        {/* Left side modal */}
        <div>
          <div className="flex justify-center p-2">
            {position === "left" && <Logo />}
          </div>
          <ul className="flex flex-col">
            {categoryLink &&
              categoryLink.map((link) => (
                <CategoryLink key={link.title} {...link} isSideNavbar={true} />
              ))}
          </ul>
        </div>
        {position === "left" && (
          <div>
            <Link
              href="/profile"
              className=" flex w-full items-center gap-4 border-b-2 border-teal-700 bg-primary p-2 text-left text-xl dark:border-neutral-800 dark:bg-neutral-900"
            >
              <FaRegUserCircle />
              Profile
            </Link>
            <button
              onClick={() => (sessionData?.user ? signOut() : signIn())}
              className="mt-auto flex w-full items-center gap-4  bg-primary p-2 text-left text-xl dark:border-neutral-800 dark:bg-neutral-900"
            >
              <BsArrowReturnRight />
              {sessionData?.user ? "Sign out" : "Sign in"}
            </button>
          </div>
        )}
      </div>
      {position === "left" && (
        <div
          className={`fixed bottom-0 ${
            showSideChildLinks ? "left-0" : "-left-[150%]"
          } z-30 flex h-screen w-screen translate-x-0 flex-col justify-between bg-yellow-50 transition-all dark:bg-slate-800 dark:text-slate-100  sm:w-96`}
        >
          <div className="flex justify-center p-2">
            {position === "left" && <Logo />}
          </div>
          <button
            onClick={() =>
              setShowSideChildLinks && setShowSideChildLinks(false)
            }
            className="absolute left-2 top-0 p-2 text-xl hover:cursor-pointer
            "
          >
            <BsArrowLeft size={25} className="mt-2" />
          </button>

          {position === "left" && (
            <>
              <ul className=" mb-auto flex flex-col ">
                {currentChildLinks &&
                  currentChildLinks.map((link) => (
                    <CategoryLink
                      key={link.title}
                      {...link}
                      isSideNavbar={true}
                    />
                  ))}
              </ul>

              <div>
                <Link
                  href="/profile"
                  className=" flex w-full items-center gap-4 border-b-2 border-yellow-300 bg-yellow-200 p-2 text-left text-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <FaRegUserCircle />
                  Profile
                </Link>
                <button
                  onClick={() => (sessionData?.user ? signOut() : signIn())}
                  className="mt-auto flex w-full items-center gap-4  bg-yellow-200 p-2 text-left text-xl dark:bg-slate-900"
                >
                  <BsArrowReturnRight />
                  {sessionData?.user ? "Sign out" : "Sign in"}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SidebarNavModal;
