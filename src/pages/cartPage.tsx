import { useRouter } from "next/router";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const router = useRouter();
  const { productId, selectedSize, productName, productImage } = router.query;
  const [input, setInput] = useState("");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1Change = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleCheckbox2Change = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  function handleChange(e) {
    setInput(e.target.value);
  }

  const imageSrc: string = productImage as string;
  const imageAlt: string = productName as string;

  useEffect(() => {
    if (productId && selectedSize) {
      console.log(`Product ID: ${productId}`);
      console.log(`Selected Size: ${selectedSize}`);
    }
  }, [productId, selectedSize]);

  return (
    <div className="ml-2 flex flex-col ">
      <h1 className="mt-10 font-poppins text-3xl font-bold text-neutral-700  dark:text-slate-100">
        Checkout
      </h1>
      <p className="mt-5 font-poppins text-2xl font-bold text-neutral-700 dark:text-slate-100 md:mt-10">
        Billig details
      </p>
      <div className="md:flex">
        {/* FORM 1 */}
        <div className="  pt-5 md:mr-20">
          <form className="md:flex">
            <label className=" font-poppins dark:text-slate-100 md:mr-10">
              First name*
              <input
                className="mb-5 mt-3 flex flex-col bg-slate-200  px-3 py-1 dark:bg-neutral-700"
                type="text"
                onChange={handleChange}
                placeholder="First name"
              />
            </label>
            <label className="font-poppins md:mr-10">
              Last name*
              <input
                className="mb-5 mt-3 flex flex-col bg-slate-200 px-3 py-1 dark:bg-neutral-700"
                type="text"
                onChange={handleChange}
                placeholder="Last name"
              />
            </label>
            <label className="font-poppins">
              Phone*
              <input
                className="mb-5 mt-3 flex flex-col bg-slate-200 px-3 py-1 dark:bg-neutral-700 "
                type="text"
                onChange={handleChange}
                placeholder="Phone"
              />
            </label>
          </form>
          {/* FORM 2 */}
          <form className="md:flex">
            <label className=" font-poppins md:mr-10">
              Street Address*
              <input
                className="mb-5 mt-3 flex flex-col bg-slate-200 px-3 py-1 dark:bg-neutral-700 "
                type="text"
                onChange={handleChange}
                placeholder="Street address"
              />
            </label>

            <label className="font-poppins">
              Country/Region*
              <input
                className="mb-5 mt-3 flex flex-col bg-slate-200 px-3 py-1  dark:bg-neutral-700 md:mr-10"
                type="text"
                onChange={handleChange}
                placeholder="Country/Region"
              />
            </label>
            <label className="font-poppins">
              Apt
              <input
                className="  mt-3 flex flex-col  bg-slate-200 px-3 py-1 dark:bg-neutral-700"
                type="text"
                onChange={handleChange}
                placeholder="Apartment, etc"
              />
            </label>
          </form>
          {/* FORM Stop */}

          <button className=" m-10 rounded-lg border bg-neutral-700 px-5 py-1 font-bold text-neutral-100 dark:bg-slate-100 dark:text-neutral-700">
            Continue to delevery
          </button>

          {/* CHECKBOXES */}
          <div className="mb-10">
            <input type="checkbox" className="rounded-full" />
            <label className="ml-3 font-poppins text-neutral-700 dark:text-slate-100">
              Save my information for a faster checkout
            </label>
          </div>
        </div>

        <div>
          <span>{selectedSize}</span>
          <Image src={imageSrc} alt={imageAlt} width={150} height={250} />
          <span>{productName}</span>
        </div>
      </div>
      <div>
        <h1 className="mb-5 mt-10 font-poppins text-3xl font-bold  text-neutral-700 dark:text-slate-100">
          Shipping Address
        </h1>
        <p className="font-poppins">
          Select the address that matches your card or payment method
        </p>
        <ul className="mb-20 mt-10 ">
          <li className="mb-3 bg-slate-100 p-6 dark:bg-neutral-700 ">
            <input
              type="checkbox"
              onChange={handleCheckbox1Change}
              checked={isChecked1}
            />

            <label className="ml-2 font-poppins">Same as Billig address</label>
          </li>
          <li className=" bg-slate-100 p-6 dark:bg-neutral-700">
            <input
              type="checkbox"
              onChange={handleCheckbox2Change}
              checked={isChecked2}
            />
            <label className="ml-2">Use a different shipping address</label>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="mb-5 mt-10 font-poppins text-3xl font-bold   text-neutral-700 dark:text-slate-100">
          Shipping Method
        </h1>
        <p className="border-b border-neutral-600 bg-slate-100 p-6 dark:bg-neutral-700">
          Arrives by friday, October 31
        </p>
        <div className="mb-10 flex justify-between bg-slate-100 dark:bg-neutral-700">
          <p className=" flex  p-6">Delivery Charges</p>
          <p className="flex items-center pr-10">$15</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
