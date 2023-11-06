import React, { useState } from "react";
import { Size, ShoeSize } from "@prisma/client";
import { BiSolidShoppingBag } from "react-icons/bi";
import { useRouter } from "next/router";
<<<<<<< HEAD
=======
import { updateCart } from "./UpdateCart";
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690

interface AddToCartButtonProps {
  selectedSize: Size | ShoeSize | null;
  productName: string;
  productImage: string;
  productId: string;
<<<<<<< HEAD
}
=======
  price: number;
}

>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
export default function AddToCartButton({
  selectedSize,
  productName,
  productImage,
  productId,
<<<<<<< HEAD
=======
  price,
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
}: AddToCartButtonProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
<<<<<<< HEAD
    if (selectedSize) {
=======
    if (!selectedSize) {
      return;
    }
    if (selectedSize) {
      updateCart(productId, selectedSize, productName, productImage, price);
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
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
<<<<<<< HEAD
=======
      searchParams.append("price", String(price));
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690

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
<<<<<<< HEAD
        className="flex w-[270px] items-center justify-between rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-600"
=======
        className="hover-bg-gray-600 flex w-[270px] items-center justify-between rounded-md bg-gray-800 px-4 py-2 text-sm text-white"
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
        onClick={handleAddToCart}
      >
        <span className="font-semibold">Add to cart</span>
        <BiSolidShoppingBag />
      </button>

      {isModalOpen && (
<<<<<<< HEAD
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
=======
        <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center">
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
          <div className="rounded bg-white p-4 shadow-md">
            <p>Product has been added to the cart.</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={goToCart}
<<<<<<< HEAD
                className="mr-4 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-600"
=======
                className="hover-bg-gray-600 mr-4 rounded-md bg-gray-900 px-4 py-2 text-white"
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
              >
                Go to Cart
              </button>
              <button
                onClick={closeModal}
<<<<<<< HEAD
                className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-600"
=======
                className="hover-bg-gray-600 rounded-md bg-gray-900 px-4 py-2 text-white"
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
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
