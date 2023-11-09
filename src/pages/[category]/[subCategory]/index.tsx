// import { useSearchParams } from "next/navigation";
import type { SubCategory } from "@prisma/client";
import { useRouter } from "next/router";
import React from "react";
import ProductCategoryPageContainer from "~/components/products/ProductCategoryPageContainer";
import { api } from "~/utils/api";

const subCategoryPage = () => {
  const router = useRouter();
  const subCategory = router.query.subCategory as SubCategory;

  // To get search params. ?id=
  // const searchParams = useSearchParams();
  // const search = searchParams.get("id");
  const subProducts =
    subCategory &&
    api.product.getSubCategoryProducts.useQuery({
      subCategory: subCategory,
    }).data;

  return subProducts ? (
    <ProductCategoryPageContainer
      products={subProducts}
      title={subCategory}
      subCategory={subCategory}
    />
  ) : (
    <div>...loading</div>
  );
};

export default subCategoryPage;
