import React from "react";
import { Product, Size, ShoeSize } from "@prisma/client";
import { BiSolidShoppingBag } from "react-icons/bi";

export default function AddToCartButton() {
  return (
    <button className="flex w-[270px] items-center justify-between rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-600">
      <span className="font-semibold">Add to cart</span>
      <BiSolidShoppingBag />
    </button>
  );
}
