import React, { useState } from "react";
import { Size, ShoeSize } from "@prisma/client";
import { BiSolidShoppingBag } from "react-icons/bi";
import { useRouter } from "next/router";
import { updateCart } from "./UpdateCart";

interface AddToCartButtonProps {
  selectedSize: Size | ShoeSize | null;
  productName: string;
  productImage: string;
  productId: string;
  price: number;
}

export default function AddToCartButton({
  selectedSize,
  productName,
  productImage,
  productId,
  price,
}: AddToCartButtonProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      return;
    }
    if (selectedSize) {
      updateCart(productId, selectedSize, productName, productImage, price);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToCart = () => {
    if (selectedSize) {
      const searchParams = new URLSearchParams();
      searchParams.append("productId", productId);
      searchParams.append("selectedSize", selectedSize);
      searchParams.append("productName", productName);
      searchParams.append("productImage", productImage);
      searchParams.append("price", String(price));

      router.push(`/cart?${searchParams.toString()}`);
    }
  };

  if (!selectedSize) {
    return (
      <button className="w-[270px] rounded-md bg-gray-500 px-4 py-2 text-sm text-white">
        Choose a size
      </button>
    );
  }

  return (
    <div>
      <button
        className="hover-bg-gray-600 flex w-[270px] items-center justify-between rounded-md bg-gray-800 px-4 py-2 text-sm text-white"
        onClick={handleAddToCart}
      >
        <span className="font-semibold">Add to cart</span>
        <BiSolidShoppingBag />
      </button>

      {isModalOpen && (
        <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center">
          <div className="rounded bg-white p-4 shadow-md">
            <p>Product has been added to the cart.</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={goToCart}
                className="hover-bg-gray-600 mr-4 rounded-md bg-gray-900 px-4 py-2 text-white"
              >
                Go to Cart
              </button>
              <button
                onClick={closeModal}
                className="hover-bg-gray-600 rounded-md bg-gray-900 px-4 py-2 text-white"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
