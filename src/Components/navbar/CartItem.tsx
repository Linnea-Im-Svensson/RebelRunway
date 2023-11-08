import Image from "next/image";
import Loading from "../utils/Loading";
import { api } from "~/utils/api";
import type { Product, ProductInCart } from "@prisma/client";

type CartItemProps = {
  product: ProductInCart & { product: Product };
};

const CartItem = ({ product }: CartItemProps) => {
  const ctx = api.useContext();

  const { mutate, isLoading } = api.cart.removeProductInCart.useMutation({
    onSuccess: async () => {
      await ctx.cart.getProductsInCart.invalidate();
    },
  });

  return (
    <div className="relative flex items-center justify-start gap-4 rounded-lg bg-neutral-700 p-2">
      <button
        onClick={() => mutate({ productInCartId: product.id })}
        className="absolute right-4 top-[50%] -translate-y-[50%] text-neutral-200"
        disabled={isLoading}
      >
        {isLoading ? <Loading fillColor="fill-neutral-600" /> : "X"}
      </button>
      <div className="h-20 w-20 overflow-hidden rounded-lg">
        <Image
          src={product.product.image}
          alt={product.product.name}
          height={50}
          width={50}
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-sm text-neutral-400 underline">Brand</p>
        <p>{product.product.name}</p>
        <p>{product.product.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
