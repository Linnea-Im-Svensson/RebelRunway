import React from "react";
import { api } from "~/utils/api";

const newsPage = () => {
  const products = api.product.getAllProducts.useQuery().data;
  console.log(products);
  return <div>Nyheter</div>;
};

export default newsPage;
