import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type wishlistProps = {
  img: StaticImageData | string;
  alt: string;
  productName: string;
  color: string;
  qty: number;
  total: number;
};

const Wishlist = ({
  img,
  alt,
  color,
  qty,
  total,
  productName,
}: wishlistProps) => {
  return (
    <section className="mt-14 w-[90vw] md:w-[60vw]">
      <div className="relative mt-4 flex items-end justify-between border-b-2 border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex">
          <div className="pr-4">
            <Image
              src={img}
              width={120}
              height={120}
              alt={alt}
              className="rounded-md"
            />
          </div>
          <div>
            <h2 className="text-base font-semibold">{productName}</h2>
            <p className="text-sm">{`Color: ${color}`}</p>
            <p className="text-sm">{`Qty: ${qty}`}</p>
            <p className="text-sm">{`Total: $${total}`}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="cursor-pointer rounded-md bg-gray-400 px-3 py-2 text-white md:px-4 md:py-3">
            Delete
          </button>

          <button className="cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
