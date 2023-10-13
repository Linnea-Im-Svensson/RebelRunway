import React, { useState } from "react";
import { Product, Category, Size, ShoeSize } from "@prisma/client";

interface DropdownProps {
  products: Product[];
  productCategory: Category;
}

export default function Dropdown({ productCategory }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<Size | ShoeSize | null>(
    null,
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (size: Size | ShoeSize) => {
    setSelectedSize(size);
    setIsOpen(false);
  };

  const allSizes: Array<Size | ShoeSize> =
    productCategory === "shoes" ? Object.values(ShoeSize) : Object.values(Size);

  return (
    <div className="mt-2">
      <button
        className={`flex w-[270px] items-center justify-between border border-gray-400 bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 ${
          isOpen ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={toggleDropdown}
      >
        <span className="pr-2">
          {selectedSize
            ? productCategory === "shoes"
              ? selectedSize.split("_")[1]
              : selectedSize
            : "Choose a size"}
        </span>
        <span className={`transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="rounded-b-md border border-gray-300 bg-white text-gray-800">
          {allSizes.map((size, index) => (
            <div
              key={index}
              className="cursor-pointer border border-gray-100 px-4 py-2 hover:rounded-md hover:bg-gray-100"
              onClick={() => handleItemClick(size)}
            >
              {size.split("_")[1] ? size.split("_")[1] : size}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
