import { useRouter } from "next/router";
import React from "react";

const productPage = () => {
  const router = useRouter();
  return <div>{router.query.productId}</div>;
};

export default productPage;
