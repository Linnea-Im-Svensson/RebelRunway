import ProductCategoryPageContainer from "~/components/products/ProductCategoryPageContainer";
import { api } from "~/utils/api";

const newsPage = () => {
  const products = api.product.getAllProducts.useQuery().data;
  return products ? (
    <ProductCategoryPageContainer products={products} title="News" />
  ) : (
    <div>...loading</div>
  );
};

export default newsPage;
