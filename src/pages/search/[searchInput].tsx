import { Product } from "@prisma/client";
import { useRouter } from "next/router";
import ProductCategoryPageContainer from "~/components/products/ProductCategoryPageContainer";
import ProductGridBox from "~/components/products/ProductGridBox";
import { api } from "~/utils/api";

const searchPage = () => {
  const router = useRouter();
  const input = router.query.searchInput as string;
  const searchedProducts: Product[] | undefined =
    input !== "" && input !== undefined
      ? api.product.getAllSearchedProducts.useQuery({
          search: input,
        }).data
      : undefined;

  console.log(searchedProducts);
  return searchedProducts?.length ? (
    <ProductCategoryPageContainer
      products={searchedProducts}
      title={`Search results for "${input}"`}
    />
  ) : (
    <p className="mt-4">Could not find anything matching "{input}"</p>
  );
};

export default searchPage;
