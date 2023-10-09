import { useRouter } from "next/router";
import ProductGridBox from "~/components/products/ProductGridBox";
import { api } from "~/utils/api";

const categoryPage = () => {
  const router = useRouter();
  const category = router.query.category;
  // const products = api.product.getCategoryProducts.useQuery()

  return <div>{category}</div>;
};

export default categoryPage;
