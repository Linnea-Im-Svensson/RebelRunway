import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

interface CartItem {
  productId: string;
  selectedSize: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const router = useRouter();
  const { productId, selectedSize, productName, productImage, price } =
    router.query;

  const initialCartItems: CartItem[] = [];

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      const cartData = JSON.parse(storedCart);
      setCartItems(cartData);
      const newTotalPrice = calculateTotalPrice(cartData);
      setTotalPrice(newTotalPrice);
    }
  }, []);

  const removeFromCart = (
    productId: string,
    selectedSize: string,
    price: number,
  ) => {
    const updatedCart = cartItems.filter(
      (item) =>
        item.productId !== productId || item.selectedSize !== selectedSize,
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const newTotalPrice = calculateTotalPrice(updatedCart);
    setTotalPrice(newTotalPrice);
  };

  const increaseQuantity = (productId: string, selectedSize: string) => {
    const updatedCart = cartItems.map((item) => {
      if (
        item.productId === productId &&
        item.selectedSize === selectedSize &&
        item.quantity > 0
      ) {
        item.quantity += 1;
      }
      return item;
    });
    const updatedTotalPrice = calculateTotalPrice(updatedCart);
    setTotalPrice(updatedTotalPrice);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId: string, selectedSize: string) => {
    const updatedCart = cartItems.filter((item) => {
      if (item.productId === productId && item.selectedSize === selectedSize) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return false;
        }
      }
      return true;
    });

    setCartItems(updatedCart);
    const updatedTotalPrice = calculateTotalPrice(updatedCart);
    setTotalPrice(updatedTotalPrice);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  function calculateTotalPrice(cartItems: CartItem[]) {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  }

  if (productId && selectedSize && productName && productImage) {
    return (
      <div className="flex w-[300px] flex-col border border-gray-200 p-2">
        <div>
          <p className="p-2 text-center font-bold underline">Order Summary</p>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div
                className="flex flex-col border-b border-t border-gray-200 p-2"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      width={70}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex gap-2">
                      <span className="font-semibold">{item.productName}</span>
                      <span className=" font-extralight">
                        x {item.quantity}
                      </span>
                    </div>

                    <div>
                      <span className="flex gap-2">
                        <p>Size:</p>
                        <p className={"font-light"}>
                          {item.selectedSize.startsWith("SIZE_")
                            ? item.selectedSize.split("_")[1]
                            : item.selectedSize}
                        </p>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="font-bold"
                        onClick={() =>
                          decreaseQuantity(item.productId, item.selectedSize)
                        }
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        onClick={() =>
                          removeFromCart(
                            item.productId,
                            item.selectedSize,
                            item.price,
                          )
                        }
                      >
                        <RiDeleteBin5Line />{" "}
                      </button>
                      <button
                        className="font-bold"
                        onClick={() =>
                          increaseQuantity(item.productId, item.selectedSize)
                        }
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="font-extralight">{item.price} kr</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="m-2 flex justify-between ">
          <p className="font-semibold">Total</p>
          <p className="font-bold">{totalPrice} kr</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Missing product information</p>
      </div>
    );
  }
};

export default Cart;
