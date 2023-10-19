import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type userProps = {
  img: StaticImageData | string;
  alt: string;
  fullName: string;
  email: string;
  street: string;
  postalCode: number;
  city: string;
  country: string;
};
const UserInfo = ({
  img,
  alt,
  fullName,
  email,
  street,
  postalCode,
  city,
  country,
}: userProps) => {
  return (
    <section className="mt-2 w-[90vw] md:w-[50vw]">
      <div className="mt-4 rounded-md bg-[#ebeef2] p-10 dark:text-black">
        <div className="flex flex-row items-start justify-between">
          <Image src={img} alt={alt} height={200} />
          <div className="flex flex-col justify-start md:items-start md:justify-between">
            <div className="ml-4">
              <button className=" cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3">
                Edit profile
              </button>
            </div>
            <div className="ml-4 mt-6">
              <p className="font-semibold">
                Name: <span className="font-normal">{fullName}</span>
              </p>
              <p className="font-semibold">
                Email: <span className="font-normal">{email}</span>
              </p>
              <p className="mt-4 font-semibold">
                Street Address: <span className="font-normal">{street}</span>
              </p>
              <p className="font-semibold">
                Postal Code: <span className="font-normal">{postalCode}</span>
              </p>
              <p className="font-semibold">
                City: <span className="font-normal">{city}</span>
              </p>
              <p className="font-semibold">
                Country: <span className="font-normal">{country}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;