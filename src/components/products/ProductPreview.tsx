import React from "react";
import { Product } from "@prisma/client";
import Image from "next/image";
import { PiCircleFill } from "react-icons/pi";
import Dropdown from "./DropDown";

interface ProductPreviewProps {
  product: Product;
}

export default function ProductPreview({ product }: ProductPreviewProps) {
  const { color, image, name, price, id } = product;

  return (
    <div
      key={id}
      className="flex flex-col items-center gap-1 md:m-2 md:items-start"
    >
      <Image
        className="h-[360px] w-[270px] rounded-lg"
        src={image}
        alt={name}
        width={270}
        height={360}
      />
      <div className="text-xs font-bold">{name}</div>
      <div className="text-xs font-semibold">{price} kr</div>
      <Dropdown products={[product]} productCategory={product.category} />
      <div>
        <div className="mb-1 mt-1 flex gap-2">
          <PiCircleFill
            className="rounded-xl border border-gray-300 text-sm"
            color={color}
          />
          <PiCircleFill
            className="rounded-xl border border-gray-300 text-sm"
            color={color}
          />
          <PiCircleFill
            className="rounded-xl border border-gray-300 text-sm"
            color={color}
          />
        </div>
      </div>
    </div>
  );
}
