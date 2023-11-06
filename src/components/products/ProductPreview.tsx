import { Product, Size, ShoeSize } from "@prisma/client";
import Image from "next/image";
import { PiCircleFill } from "react-icons/pi";

import FavoriteBtn from "../utils/FavoriteBtn";

import Dropdown from "./DropDown";
import AddToCartButton from "./AddToCartButton";
import React, { useState } from "react";

interface ProductPreviewProps {
  product: Product;
  productId: string;
  selectedSize: Size | ShoeSize | null;
  productImage: string;
}

<<<<<<< HEAD
export default function ProductPreview({
  product,
  productId,
  productImage,
}: ProductPreviewProps) {
=======
const ProductPreview = ({
  product,
  productId,
  productImage,
}: ProductPreviewProps) => {
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
  const { color, image, name, price, id } = product;
  const [selectedSize, setSelectedSize] = useState<Size | ShoeSize | null>(
    null,
  );

  const handleSizeChange = (size: Size | ShoeSize) => {
    setSelectedSize(size);
  };

  return (
    <div
      key={id}
      className="relative flex flex-col items-center gap-1 md:m-2 md:items-start"
    >
      <div className="absolute left-3 top-3">
        <FavoriteBtn productId={id} />
      </div>
      <Image
        className="h-[360px] w-[270px] rounded-lg"
        src={image}
        alt={name}
        width={270}
        height={360}
      />
      <div className="text-xs font-bold">{name}</div>
      <div className="text-xs font-semibold">{price} kr</div>
      <div>
        <div className="mb-1 mt-1 flex gap-2">
          <PiCircleFill
            className="rounded-xl border border-gray-300 text-sm"
            color={color}
          />
          <PiCircleFill className="rounded-xl bg-white text-sm" color={color} />
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
      <Dropdown
        products={[product]}
        productCategory={product.category}
        onSizeChange={handleSizeChange}
      />
      <AddToCartButton
        selectedSize={selectedSize}
        productName={name}
        productImage={productImage}
        productId={productId}
<<<<<<< HEAD
=======
        price={price}
>>>>>>> bd206d3f65c1b68967684516d00546451af8e690
      />
    </div>
  );
};
export default ProductPreview;
