import ProductHeader from "./ProductHeader";
import ProductGridBox from "./ProductGridBox";
import { Category, Product, SubCategory } from "@prisma/client";
import Filter from "../filter/Filter";
import { useEffect, useState } from "react";

type ProductCategoryPageContainerProps = {
  products: Product[];
  title: string;
  category?: Category;
  subCategory?: SubCategory;
};

const ProductCategoryPageContainer = ({
  products,
  title,
  category,
  subCategory,
}: ProductCategoryPageContainerProps) => {
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >(undefined);
  // useEffect(() => {
  //   setFilteredProducts(undefined);
  // }, []);
  // console.log(filteredProducts);
  return (
    <div className="w-3/4">
      <ProductHeader title={title} />
      <Filter
        setFilteredProducts={setFilteredProducts}
        category={category}
        subCategory={subCategory}
      />
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
