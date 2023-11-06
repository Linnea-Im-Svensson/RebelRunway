import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type orderProps = {
  orderNr: string;
  orderDate: string;
  estDeliveryDate: string;
  orderStatus: "In Progress" | "Cancelled" | "Completed";
  paymentMethod: "Credit Card" | "Swish";
  img: StaticImageData | string;
  alt: string;
  productName: string;
  color: string;
  qty: number;
  total: number;
};

const Order = ({
  orderNr,
  orderDate,
  estDeliveryDate,
  orderStatus,
  paymentMethod,
  img,
  alt,
  productName,
  color,
  qty,
  total,
}: orderProps) => {
  return (
    <section className="mt-2 w-[90vw] md:w-[60vw]">
      <div className=" mt-4 rounded-md bg-[#ebeef2] p-10 dark:text-black">
        <h2 className="mb-2 text-left font-semibold">{orderNr}</h2>
        <div className="flex flex-col justify-start md:flex-row md:items-center md:justify-between">
          <div className="mb-4">
            <p>{`Order Date: ${orderDate}`}</p>
            <p>{`Est. Delivery Date: ${estDeliveryDate}`}</p>
          </div>
          <div>
            <p>{`Order Status: ${orderStatus}`}</p>
            <p>{`Payment Method: ${paymentMethod}`}</p>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between pb-6 md:flex-row md:items-center md:justify-between">
        <div className="mt-6 flex">
          <div className="pr-4">
            <Image
              src={img}
              width={90}
              height={90}
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
        <div className="flex items-end">
          <div>
            <button className="mt-4 cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
