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
        <Image src={img} alt={alt} height={200} />
        <div className="flex flex-col justify-start md:flex-row md:items-start md:justify-between">
          <div className="mt-4">
            <p>Name: {fullName}</p>
            <p>Email: {email}</p>
          </div>
          <div className="mt-4">
            <p>Street Address: {street}</p>
            <p>Postal Code: {postalCode}</p>
            <p>City: {city} </p>
            <p>Country: {country}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
