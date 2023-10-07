import { Product } from "@prisma/client";
import Image from "next/image";
import { PiCircleFill } from "react-icons/Pi";

const ProductPreview = ({ color, image, name, price, id }: Product) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center gap-1 md:m-2 md:items-start"
    >
      <Image
        className="h-auto max-w-full rounded-lg"
        src={image}
        alt={name}
        width={270}
        height={360}
      />
      <div className="text-xs font-bold">{name}</div>
      <div className="text-xs">{price}</div>
      <div>
        <div className="mb-1 mt-1 flex gap-2">
          <PiCircleFill
            className="rounded-xl bg-pink-300 text-sm"
            color={color}
          />
          <PiCircleFill className="rounded-xl bg-white text-sm" color={color} />
          <PiCircleFill
            className=" rounded-xl bg-red-700 text-sm"
            color={color}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPreview;
