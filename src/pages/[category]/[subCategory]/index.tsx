// import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const subCategoryPage = () => {
  const router = useRouter();
  const subCategory = router.query.subCategory;

  // To get search params. ?id=
  // const searchParams = useSearchParams();
  // const search = searchParams.get("id");

  return <div>{subCategory}</div>;
};

export default subCategoryPage;
