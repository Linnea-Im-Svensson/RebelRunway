import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import type { StaticImageData } from "next/image";

type CardProps = {
  productName: string;
  img: string | StaticImageData;
  cta: string;
  url: string;
};

function ProductCard({ productName, img, cta, url }: CardProps) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <Image
          src={img}
          width={270}
          height={360}
          alt={productName}
          className="mt-4 rounded-xl"
        />
      </div>

      <div className="py-6 font-poppins">
        <div className="text-xl font-medium text-[#191919] dark:text-neutral-200">
          {productName}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-[#7F7F7F]">{cta}</p>
          <Link href={url}>
            <BsArrowRight size={20} color="#7F7F7F" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
