import React, { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useSession } from "next-auth/react";
import { User } from "@prisma/client";
import { api } from "~/utils/api";

type userProps = {
  img: StaticImageData | string;
  alt: string;
};
const UserInfo = ({ img, alt }: userProps) => {
  const [street, setStreet] = useState<string>("");
  const [postalNumber, setPostalNumber] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [countryName, setCountryName] = useState<string>("");

  const { data: sessionData } = useSession();
  const createAddress = api.userDetails.create.useMutation();

  const getAddress = api.userDetails.getAll.useQuery();

  const handleAddAddress = () => {
    if (sessionData) {
      createAddress.mutate({
        street: street,
        postalNumber: postalNumber,
        city: cityName,
        country: countryName,
      });
      alert("Your address has been saved!");
    } else {
      alert("Log in to register your address");
    }
  };

  return (
    <section className="mt-2 w-[90vw] md:w-[50vw]">
      {/* Get user address or address form */}
      <div className="mt-4 rounded-md bg-[#ebeef2] p-10 dark:text-black">
        <div className="flex justify-between">
          <div>
            <Image src={img} alt={alt} height={200} />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <label className="font-semibold">Name: </label>
              <span>{sessionData?.user ? sessionData.user.name : "Login"}</span>
            </div>

            <div>
              <label className="font-semibold">Email: </label>
              <span>
                {sessionData?.user ? sessionData.user.email : "Login"}
              </span>
            </div>

            <div>
              {sessionData && getAddress && getAddress.data?.length === 0 ? (
                <div>
                  <div>
                    <label className="mt-4 font-semibold">Street: </label>
                    <input
                      placeholder="Enter street"
                      className="w-full text-black"
                      type="text"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mt-4 font-semibold">Postal Code: </label>
                    <input
                      placeholder="Enter postal code"
                      className="w-full text-black"
                      type="text"
                      value={postalNumber}
                      onChange={(e) => setPostalNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mt-4 font-semibold">City: </label>
                    <input
                      placeholder="Enter city"
                      className="w-full text-black"
                      type="text"
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mt-4 font-semibold">Country: </label>
                    <input
                      placeholder="Enter country"
                      className="w-full text-black"
                      type="text"
                      value={countryName}
                      onChange={(e) => setCountryName(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={handleAddAddress}
                    className="mt-6 cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3"
                  >
                    Add Your Address
                  </button>
                </div>
              ) : (
                <div>
                  {getAddress.data?.map((address, i) => {
                    return (
                      <div key={i}>
                        <div>
                          <label className="mt-4 font-semibold">Street: </label>
                          <div>{address.street}</div>
                        </div>
                        <div>
                          <label className="mt-4 font-semibold">
                            Postal Code:{" "}
                          </label>
                          <div>{address.postalNumber}</div>
                        </div>

                        <div>
                          <label className="mt-4 font-semibold">City: </label>
                          <div>{address.city}</div>
                        </div>
                        <div>
                          <label className="mt-4 font-semibold">
                            Country:{" "}
                          </label>
                          <div>{address.country}</div>
                        </div>
                        <button className="mt-6 cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3">
                          Update Your Address
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
