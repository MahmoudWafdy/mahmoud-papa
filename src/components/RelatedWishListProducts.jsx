import { useMemo } from "react";
import { UseFetchData } from "../UseFetchData";
import ProductCard from "./ProductCard";

const RelatedWishListProduct = () => {
  const filters = useMemo(
    () => ({
      bestSelling: true,
      highestRated: true,
      maxPrice: 5500,
    }),
    []
  );
  const { result, error } = UseFetchData("smartphones", filters);
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="related_product mt-6 grid gap-2  grid-cols-2 sm-md:grid-cols-3 lg:grid-cols-5">
      {result.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          images={product.images}
          price={product.price}
          discountPercentage={product.discountPercentage}
          review={product.reviews.length}
          category={product.category}
          stock={product.stock}
          description={product.description}
          deleteButton={""}
        />
      ))}
    </div>
  );
};
export default RelatedWishListProduct;
