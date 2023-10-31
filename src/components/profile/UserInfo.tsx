import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

type userProps = {
  img: StaticImageData | string;
  alt: string;
};

const UserInfo = ({ img, alt }: userProps) => {
  const [street, setStreet] = useState<string>("");
  const [postalNumber, setPostalNumber] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [countryName, setCountryName] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [userAddress, setUserAddress] = useState<any>({
    street: "",
    postalNumber: "",
    city: "",
    country: "",
  });
  const [showForm, setShowForm] = useState(false);

  const { data: sessionData } = useSession();
  const createAddress = api.userDetails.create.useMutation();
  const updateAddress = api.userDetails.update.useMutation();
  const getAddress = api.userDetails.getAll.useQuery();

  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeLoginModal = () => {
    setLoginIsOpen(false);
    router.push(`/`);
  };

  useEffect(() => {
    if (getAddress.data && getAddress.data.length > 0) {
      const latestAddress = getAddress.data[getAddress.data.length - 1];
      setUserAddress({ ...latestAddress });
      setStreet(latestAddress?.street || "");
      setPostalNumber(latestAddress?.postalNumber || "");
      setCityName(latestAddress?.city || "");
      setCountryName(latestAddress?.country || "");
    } else {
      setUserAddress({
        street: "",
        postalNumber: "",
        city: "",
        country: "",
      });
    }
  }, [getAddress.data]);

  const handleAddOrUpdateAddress = () => {
    if (sessionData) {
      if (isEditing) {
        updateAddress.mutate({
          addressId: userAddress.id,
          street: street,
          postalNumber: postalNumber,
          city: cityName,
          country: countryName,
        });
        setIsOpen(true);
        setShowForm(false);
      } else {
        createAddress.mutate({
          street: street,
          postalNumber: postalNumber,
          city: cityName,
          country: countryName,
        });
        setIsOpen(true);
        setShowForm(false);
      }
    } else {
      setLoginIsOpen(true);
    }
  };

  const editAddress = (address: any) => {
    setIsEditing(true);
    setStreet(address.street);
    setPostalNumber(address.postalNumber);
    setCityName(address.city);
    setCountryName(address.country);
    setShowForm(true);
    setUserAddress({ ...address });
  };

  return (
    <section className="mt-2 w-[90vw] md:w-[50vw]">
      <div className="mt-4 rounded-md bg-[#ebeef2] p-10 dark:text-black">
        <div className="flex flex-col justify-evenly md:flex-row">
          <div>
            <Image className="rounded" src={img} alt={alt} height={200} />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <label className="font-semibold ">Name: </label>
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
                    onClick={handleAddOrUpdateAddress}
                    className="mt-6 cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3"
                  >
                    {isEditing ? "Save Address" : "Add Your Address"}
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
                        <button
                          onClick={() => editAddress(address)}
                          className="mt-6 cursor-pointer rounded-md bg-primary px-3 py-2 font-semibold text-white hover:bg-cyan-300 md:px-4 md:py-3"
                        >
                          Update Your Address
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {showForm && (
              <div>
                <div>
                  <label className="mt-4 font-semibold">Street: </label>
                  <input
                    placeholder="Enter street"
                    className="w-full border-2 text-black dark:bg-white"
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mt-4 font-semibold">Postal Code: </label>
                  <input
                    placeholder="Enter postal code"
                    className="w-full border-2 text-black dark:bg-white"
                    type="text"
                    value={postalNumber}
                    onChange={(e) => setPostalNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mt-4 font-semibold">City: </label>
                  <input
                    placeholder="Enter city"
                    className="w-full border-2 text-black dark:bg-white"
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mt-4 font-semibold">Country: </label>
                  <input
                    placeholder="Enter country"
                    className="w-full border-2 text-black dark:bg-white"
                    type="text"
                    value={countryName}
                    onChange={(e) => setCountryName(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleAddOrUpdateAddress}
                  className="mt-6 cursor-pointer rounded-md bg-primary px-3 py-2 font-semibold text-white hover:bg-cyan-300 md:px-4 md:py-3"
                >
                  {isEditing ? "Save Address" : "Add Your Address"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center">
            <div className="flex h-1/4 flex-col items-center justify-evenly gap-2 rounded bg-slate-200 p-4 font-semibold shadow-md md:h-1/4 md:w-1/3">
              <div className="text-xl dark:text-black">
                Your address has been {isEditing ? "updated" : "added"}
              </div>
              <button
                className="w-1/2 rounded-md bg-primary py-2 text-white hover:bg-cyan-300"
                onClick={() => closeModal()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {loginIsOpen && (
        <div>
          <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center">
            <div className="flex h-1/4 flex-col items-center justify-evenly gap-2 rounded bg-slate-200 p-4 font-semibold shadow-md md:h-1/4 md:w-1/3">
              <div className="text-xl dark:text-black">
                Log in to register/update your address
              </div>
              <div className="flex gap-3">
                <a
                  href="api/auth/signin"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                  className="rounded-md bg-primary px-6 py-2 font-semibold hover:bg-cyan-300 dark:border-neutral-800 dark:text-white"
                >
                  Log in
                </a>
                <button
                  className="w-1/2 rounded-md bg-primary py-2 text-white hover:bg-cyan-300"
                  onClick={() => closeLoginModal()}
                >
                  Go to homepage
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserInfo;
