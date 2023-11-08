import ProductHeader from "./ProductHeader";
import ProductGridBox from "./ProductGridBox";
import type { Product } from "@prisma/client";

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
        {products && <ProductGridBox products={products} selectedSize={null} />}
      </div>
    </div>
  );
};

export default ProductCategoryPageContainer;
