import { useRouter } from "next/router";
import Image from "next/image";
import React, { useEffect } from "react";

const Cart = () => {
  const router = useRouter();
  const { productId, selectedSize, productName, productImage } = router.query;

  const imageSrc: string = productImage as string;
  const imageAlt: string = productName as string;

  useEffect(() => {
    if (productId && selectedSize) {
      console.log(`Product ID: ${productId}`);
      console.log(`Selected Size: ${selectedSize}`);
    }
  }, [productId, selectedSize]);

  return (
    <div>
      <span>{selectedSize}</span>
      <Image src={imageSrc} alt={imageAlt} width={150} height={250} />
      <span>{productName}</span>
    </div>
  );
};

export default Cart;
