import ProductHeader from "./ProductHeader";
import ProductGridBox from "./ProductGridBox";
import type { Product } from "@prisma/client";
import Filter from "../filter/Filter";
import { useState } from "react";

type ProductCategoryPageContainerProps = {
  products: Product[];
  title: string;
};

const ProductCategoryPageContainer = ({
  products,
  title,
}: ProductCategoryPageContainerProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null,
  );
  return (
    <div>
      <ProductHeader title={title} />
      <Filter setFilteredProducts={setFilteredProducts} />
      <div className="my-4">
        {filteredProducts && (
          <ProductGridBox products={filteredProducts} selectedSize={null} />
        )}
        {products && !filteredProducts && (
          <ProductGridBox products={products} selectedSize={null} />
        )}
      </div>
    </div>
  );
};

export default ProductCategoryPageContainer;
