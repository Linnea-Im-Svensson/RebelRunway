import { Category } from "@prisma/client";
import { useRouter } from "next/router";
import ProductCategoryPageContainer from "~/components/products/ProductCategoryPageContainer";
import { api } from "~/utils/api";

const categoryPage = () => {
  const router = useRouter();
  const category = router.query.category as Category;

  const products =
    category &&
    api.product.getCategoryProducts.useQuery({
      category,
    }).data;

  return (
    products && (
      <ProductCategoryPageContainer
        products={products}
        title={category}
        category={category}
      />
    )
  );
};

export default categoryPage;
