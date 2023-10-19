import React from "react";
import ProductHeader from "./ProductHeader";
import ProductGridBox from "./ProductGridBox";
import { Product } from "@prisma/client";

type ProductCategoryPageContainerProps = {
  products: Product[];
  title: string;
};

const ProductCategoryPageContainer = ({
  products,
  title,
}: ProductCategoryPageContainerProps) => {
  return (
    <div>
      <ProductHeader title={title} />
      <div className="my-4">
        {products && <ProductGridBox products={products} />}
      </div>
    </div>
  );
};

export default ProductCategoryPageContainer;
