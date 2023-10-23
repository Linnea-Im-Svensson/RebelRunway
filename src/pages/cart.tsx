import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import cardtype from "public/cardtypes.png";

import { RiDeleteBin5Line } from "react-icons/ri";
/* import { AiOutlineLock } from "react-icons/ai"; */

const Cart = () => {
  const router = useRouter();
  const { productId, selectedSize, productName, productImage, price } =
    router.query;

  const initialCartItems: CartItem[] = [];

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCode, setCardCode] = useState("");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  interface CartItem {
    productId: string;
    selectedSize: string;
    productName: string;
    productImage: string;
    price: number;
    quantity: number;
  }

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      const cartData = JSON.parse(storedCart);
      setCartItems(cartData);
      const newTotalPrice = calculateTotalPrice(cartData);
      setTotalPrice(newTotalPrice);
    }
  }, []);

  const removeFromCart = (
    productId: string,
    selectedSize: string,
    price: number,
  ) => {
    const updatedCart = cartItems.filter(
      (item) =>
        item.productId !== productId || item.selectedSize !== selectedSize,
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const newTotalPrice = calculateTotalPrice(updatedCart);
    setTotalPrice(newTotalPrice);
  };

  const increaseQuantity = (productId: string, selectedSize: string) => {
    const updatedCart = cartItems.map((item) => {
      if (
        item.productId === productId &&
        item.selectedSize === selectedSize &&
        item.quantity > 0
      ) {
        item.quantity += 1;
      }
      return item;
    });
    const updatedTotalPrice = calculateTotalPrice(updatedCart);
    setTotalPrice(updatedTotalPrice);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId: string, selectedSize: string) => {
    const updatedCart = cartItems.filter((item) => {
      if (item.productId === productId && item.selectedSize === selectedSize) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return false;
        }
      }
      return true;
    });

    setCartItems(updatedCart);
    const updatedTotalPrice = calculateTotalPrice(updatedCart);
    setTotalPrice(updatedTotalPrice);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  function calculateTotalPrice(cartItems: CartItem[]) {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  }

  const handleCheckbox1Change = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleCheckbox2Change = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  const handleCheckbox3Change = () => {
    setIsChecked3(true);
    setIsChecked4(false);
    setIsChecked5(false);
  };

  const handleCheckbox4Change = () => {
    setIsChecked4(true);
    setIsChecked3(false);
    setIsChecked5(false);
  };
  const handleCheckbox5Change = () => {
    setIsChecked5(true);
    setIsChecked3(false);
    setIsChecked4(false);
  };

  return (
    <div className="ml-2 flex-col ">
      <h1 className="mt-10 font-poppins text-3xl font-bold text-neutral-700  dark:text-slate-100">
        Checkout
      </h1>
      <p className="mt-5 font-poppins text-2xl font-bold text-neutral-700 dark:text-slate-100">
        Billig details
      </p>
      <div className="md:flex">
        {/* FORMS */}

        <div className=" pt-10 md:mr-20">
          <form className="  md:flex">
            <label className="font-poppins dark:text-slate-100 md:mr-10">
              First name*
              <input
                className="mb-5 flex flex-col  bg-slate-200 dark:bg-neutral-700"
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </label>
            <label className=" font-poppins md:mr-10">
              Last name*
              <input
                className="flex flex-col  bg-slate-200 dark:bg-neutral-700"
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </label>
            <label className="font-poppins">
              Phone*
              <input
                className="mb-10 flex flex-col bg-slate-200 dark:bg-neutral-700 "
                type="text"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />
            </label>
          </form>
          <form className="md:flex">
            <label className=" font-poppins md:mr-10">
              Street Address*
              <input
                className="mb-5 flex flex-col bg-slate-200 dark:bg-neutral-700 "
                type="text"
                value={input4}
                onChange={(e) => setInput4(e.target.value)}
              />
            </label>

            <label className="font-poppins">
              Country/Region*
              <input
                className="mb-10 flex flex-col bg-slate-200 dark:bg-neutral-700 md:mr-10"
                type="text"
                value={input5}
                onChange={(e) => setInput5(e.target.value)}
              />
            </label>
            <label className="font-poppins">
              Apt
              <input
                className=" flex flex-col bg-slate-200 dark:bg-neutral-700 "
                type="text"
                value={input6}
                onChange={(e) => setInput6(e.target.value)}
              />
            </label>
          </form>
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

                <label className="ml-2 font-poppins">
                  Same as Billig address
                </label>
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
          <div>
            {/* Emmas */}

            <div className="">
              <h1 className="mb-5 mt-10 font-poppins text-3xl font-bold text-neutral-700 dark:text-slate-100">
                Payment method
              </h1>
              <p className="text-sm">
                All transactions are secure and encrypted.
              </p>
            </div>
            <div className="flex flex-col  bg-slate-100 p-4 font-poppins dark:text-slate-700 ">
              <div className="border-b border-gray-200 p-2">
                <div className="m-2 ">
                  <label className="flex items-center space-x-1 font-semibold text-neutral-700 ">
                    <input
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckbox3Change}
                      className="mr-1"
                    />
                    Credit Card
                  </label>
                  <div className="flex flex-col gap-2 dark:text-slate-700">
                    <p className="text-sm text-neutral-700">
                      We accept all major credit cards.
                    </p>
                    <Image src={cardtype} alt={"cardtypes"} width={170} />
                  </div>
                </div>
                <div className=" m-2 flex flex-col gap-2 md:flex-row">
                  <div className="flex flex-col gap-2">
                    <div className=" border border-gray-400">
                      <input
                        className="p-2"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Card number🔒"
                        style={{ background: "transparent", width: "100%" }}
                      />
                    </div>
                    <div className="border border-gray-400">
                      <input
                        className=" p-2"
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="Name of cardholder"
                        style={{ background: "transparent", width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="border border-gray-400">
                      <input
                        className="p-2"
                        type="text"
                        id="cardDate"
                        name="cardDate"
                        value={cardDate}
                        onChange={(e) => setCardDate(e.target.value)}
                        placeholder="Expiration date (MM/YY)"
                        style={{ background: "transparent", width: "100%" }}
                      />
                    </div>
                    <div className=" border border-gray-400">
                      <input
                        className="p-2"
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={cardCode}
                        onChange={(e) => setCardCode(e.target.value)}
                        placeholder="Security code"
                        style={{ background: "transparent", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-2 border-b border-gray-200 p-2">
                <label className="flex items-center space-x-1 font-semibold text-neutral-700">
                  <input
                    type="checkbox"
                    checked={isChecked4}
                    onChange={handleCheckbox4Change}
                    className="mr-1"
                  />
                  Cash on delivery
                </label>
                <p className="text-sm text-neutral-700">
                  Pay with cash upon delivery.
                </p>
              </div>
              <div className="mt-2 p-2">
                <label className="flex items-center space-x-1 font-semibold text-neutral-700">
                  <input
                    type="checkbox"
                    checked={isChecked5}
                    onChange={handleCheckbox5Change}
                    className="mr-1"
                  />
                  Paypal
                </label>
              </div>
            </div>
            <div className="mt-4">
              <button className="rounded-sm bg-black px-8 py-2 font-poppins text-white hover:bg-gray-600 dark:bg-slate-200 dark:font-semibold dark:text-black  dark:hover:bg-white">
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex flex-col border border-gray-200 p-2">
              <div>
                <p className="p-2 text-center font-bold underline">
                  Order Summary
                </p>
              </div>
              {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty</p>
              ) : (
                <div>
                  {cartItems.map((item, index) => (
                    <div
                      className="flex flex-col border-b border-t border-gray-200 p-2"
                      key={index}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={item.productImage}
                            alt={item.productName}
                            width={70}
                            height={100}
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div className="flex gap-2">
                            <span className="font-semibold">
                              {item.productName}
                            </span>
                            <span className="font-extralight">
                              {" "}
                              x {item.quantity}
                            </span>
                          </div>

                          <div>
                            <span className="flex gap-2">
                              <p>Size:</p>
                              <p className={"font-light"}>
                                {item.selectedSize.startsWith("SIZE_")
                                  ? item.selectedSize.split("_")[1]
                                  : item.selectedSize.toUpperCase()}
                              </p>
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              className="font-bold"
                              onClick={() =>
                                decreaseQuantity(
                                  item.productId,
                                  item.selectedSize,
                                )
                              }
                            >
                              {" "}
                              -{" "}
                            </button>
                            <button
                              onClick={() =>
                                removeFromCart(
                                  item.productId,
                                  item.selectedSize,
                                  item.price,
                                )
                              }
                            >
                              <RiDeleteBin5Line />{" "}
                            </button>
                            <button
                              className="font-bold"
                              onClick={() =>
                                increaseQuantity(
                                  item.productId,
                                  item.selectedSize,
                                )
                              }
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <span className="font-extralight">
                            {item.price} kr
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="m-2 flex justify-between ">
                <p className="font-semibold">Total</p>
                <p className="font-bold">{totalPrice} kr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
