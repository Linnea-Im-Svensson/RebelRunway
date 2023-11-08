import Image from "next/image";
import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";
import Loading from "../utils/Loading";
import { experimental_useOptimistic as useOptimistic } from "react";
import { Product, ProductInCart } from "@prisma/client";
import CartItem from "./CartItem";
import Link from "next/link";
import { useSession } from "next-auth/react";

const SideBarCart = () => {
  const { data: sessionData } = useSession();
  const productsInCart = api.cart.getProductsInCart.useQuery().data ?? [];
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    setTotalCost(0);
    productsInCart &&
      productsInCart.forEach((item) => {
        setTotalCost((prev) => prev + item.product.price);
      });
  }, [productsInCart]);

  return (
    <div className="flex flex-col gap-4 px-4">
      <p className="mb-6 mt-2 text-center text-2xl">Cart</p>
      <div className=" flex h-3/5 w-full flex-col gap-4 overflow-y-scroll">
        {productsInCart?.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>

      {/* if no products in cart */}
      {productsInCart?.length === 0 || !sessionData ? (
        <div className="w-full">
          <p className="text-center">No products in cart</p>
          <div className="mt-6 h-1 w-full bg-neutral-700 dark:bg-neutral-200"></div>
          {/* add recommended products here later */}
        </div>
      ) : (
        <div className=" flex w-full flex-col gap-4 border-t-2 border-neutral-200 pt-2">
          <p>Total cost: {totalCost}:-</p>
          <Link
            href="/cart"
            className="w-full rounded-lg bg-primary p-3 text-center text-lg text-neutral-900"
          >
            Go to cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBarCart;
