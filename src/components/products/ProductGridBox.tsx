import { Product } from "@prisma/client";
import ProductPreview from "./ProductPreview";

type GridboxContainerProps = {
  products: Product[];
};

const ProductGridBox = ({ products }: GridboxContainerProps) => {
  return (
    <div className="mx-2 grid grid-cols-1 justify-items-center md:mx-4 md:grid-cols-3 md:gap-14">
      {products.map((product) => (
        <ProductPreview key={product.id} {...product} />
      ))}
    </div>
  );
};
export default ProductGridBox;
