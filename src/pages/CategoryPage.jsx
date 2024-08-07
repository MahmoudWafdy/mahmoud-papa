// src/pages/CategoryPage.js

import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import { UseFetchData } from "../UseFetchData";
import { useMemo } from "react";
import SkeletonLoader from "../components/SkeletonLoader";

const CategoryPage = () => {
  const { category } = useParams();

  const filters = useMemo(
    () => ({
      bestSelling: true,
      highestRated: true,
      maxPrice: 500,
    }),
    []
  );
  const { result, error, isLoading } = UseFetchData(category, filters);
  console.log(isLoading);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <>{isLoading ? <SkeletonLoader /> : <ProductList data={result} />}</>;
};

export default CategoryPage;
