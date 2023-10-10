import { Category } from "@prisma/client";
import { useRouter } from "next/router";
import { z } from "zod";
import ProductCategoryPageContainer from "~/components/products/ProductCategoryPageContainer";
import { api } from "~/utils/api";

const categoryPage = () => {
  const router = useRouter();
  let category = router.query.category as Category;

  const products = api.product.getCategoryProducts.useQuery({
    category: category,
  }).data;

  return products ? (
    <ProductCategoryPageContainer products={products} title={category} />
  ) : (
    <div>...loading</div>
  );
};

export default categoryPage;
