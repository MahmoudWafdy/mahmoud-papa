// src/pages/CategoryPage.js

import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import { UseFetchData } from "../UseFetchData";
import { useMemo } from "react";

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
  const { result, error } = UseFetchData(category, filters);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ProductList data={result} />;
};

export default CategoryPage;
