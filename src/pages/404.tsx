import React from "react";
import Link from "next/link";

const notFoundPage = () => {
  return (
    <div className="mt-5 flex flex-col items-center rounded-lg  dark:bg-white">
      <img src="404.png" alt="404" className="rounded-lg" />
      <h1 className="mt-10 font-poppins text-4xl font-bold text-neutral-700 ">
        Oops! Page not found
      </h1>
      <p className="mt-5 font-poppins text-lg  text-neutral-700 ">
        The page you are looking for might have <br /> been removed or
        teporarily unavailable.
      </p>
      <Link href={"/"}>
        <p className=" mt-10 rounded-md border bg-neutral-700 px-5 py-2  text-neutral-100 ">
          Go back to Homepage
        </p>
      </Link>
    </div>
  );
};

export default notFoundPage;
