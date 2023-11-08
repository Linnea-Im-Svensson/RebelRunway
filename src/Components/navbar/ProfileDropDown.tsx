import type { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useState } from "react";

type DropDownChildLink = {
  id: number;
  titel: string;
  href?: Url;
  callBack?: () => Promise<void>;
};

type ProfileDropDownProps = {
  title: string;
  dropDownChildLinks: DropDownChildLink[];
};

const ProfileDropDown = ({
  title,
  dropDownChildLinks,
}: ProfileDropDownProps) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      className="relative z-20 flex h-fit w-full min-w-[100px] cursor-pointer items-center rounded-t-lg bg-neutral-100 p-2 dark:bg-neutral-700 dark:text-neutral-100"
      onClick={() => setShowDropDown(!showDropDown)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      {title}
      {showDropDown && (
        <div className="absolute left-0 top-10 h-fit w-full rounded-b-lg bg-neutral-200 dark:bg-neutral-600">
          {dropDownChildLinks?.map((link, indx) => (
            <div key={link.id}>
              {link.href && (
                <Link href={link.href}>
                  <p
                    className={`h-fit p-2 text-center hover:bg-neutral-300 dark:hover:bg-neutral-500 ${
                      indx + 1 === dropDownChildLinks.length && "rounded-b-lg"
                    }`}
                  >
                    {link.titel}
                  </p>
                </Link>
              )}
              {link.callBack && (
                <button
                  onClick={link.callBack}
                  className={`h-fit w-full p-2 hover:bg-neutral-300 dark:hover:bg-neutral-500 ${
                    indx + 1 === dropDownChildLinks.length && "rounded-b-lg"
                  }`}
                >
                  {link.titel}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
