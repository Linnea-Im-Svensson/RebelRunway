import { useRouter } from "next/router";
import React from "react";

const searchPage = () => {
  const router = useRouter();
  return <div>{router.query.searchInput}</div>;
};

export default searchPage;
