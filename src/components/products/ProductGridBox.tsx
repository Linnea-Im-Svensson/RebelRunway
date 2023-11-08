import type { Product, Size, ShoeSize } from "@prisma/client";
import ProductPreview from "./ProductPreview";

type GridboxContainerProps = {
  products: Product[];
  selectedSize: Size | ShoeSize | null;
};

const ProductGridBox = ({ products, selectedSize }: GridboxContainerProps) => {
  return (
    <div className="mx-2 grid grid-cols-1 justify-items-center md:mx-4 md:grid-cols-3 md:gap-14">
      {products.map((product) => (
        <ProductPreview
          key={product.id}
          product={product}
          productId={product.id}
          selectedSize={selectedSize}
          productImage={product.image}
        />
      ))}
    </div>
  );
};
export default ProductGridBox;
