import { Link } from "react-router-dom";
import { UseFetchData } from "../UseFetchData";
import { useMemo } from "react";
import "./BestSelling.css";
import ProductCard from "./ProductCard";

const BestSelling = () => {
  const filters = useMemo(
    () => ({
      bestSelling: true,
      highestRated: true,
      maxPrice: 500,
    }),
    []
  );
  const { result } = UseFetchData("homelifestyle", filters);

  return (
    <div className="bestSelling">
      <div className="flex justify-start items-center gap-3 mb-3">
        <span className="w-5 h-10 bg-secondary inline-block rounded"></span>
        <span className="font-semibold text-secondary">This Month</span>
      </div>
      <div className="flex justify-between relative">
        <p className="font-semibold text-xl md:text-4xl">
          Best Selling Products
        </p>
        <Link
          to={"/category/bestselling"}
          className="bg-secondary py-2 px-6 text-white rounded absolute right-0 top-[-50px] md:-top-10 md:py-3 md:px-8"
        >
          <button className="">View All</button>
        </Link>
      </div>

      <div className="relative bestSelling mt-10 mb-5 flex gap-5 overflow-auto ">
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
            shrink={"true"}
          />
        ))}
      </div>
    </div>
  );
};
export default BestSelling;
