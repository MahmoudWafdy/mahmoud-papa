import { useEffect, useMemo, useState } from "react";
// import "./ProductCard.css";
import { UseFetchData } from "../UseFetchData";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

const settings = {
  dots: false, // Enable dots/pagination
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable automatic sliding
  autoplaySpeed: 4000, // Adjust the speed as needed
  arrows: true, // Enable left and right arrows for control
  responsive: [
    {
      breakpoint: 600, // phone screen
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 850, // larger screen
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1280, // large screen
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1480, // large screen
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};

const FlashSaleSlider = () => {
  const filters = useMemo(
    () => ({
      bestSelling: true,
      highestRated: true,
      maxPrice: 500,
    }),
    []
  ); // Use useMemo to avoid re-creating the filters object on every render

  const { result, error } = UseFetchData("electronics", filters);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Flash_slider text-center my-8 ">
      <Slider {...settings}>
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
      </Slider>
      <button className="bg-secondary text-white py-3 px-6 mx-auto mt-8">
        <Link to={"category/electronics"}>View All Products</Link>
      </button>
    </div>
  );
};
export default FlashSaleSlider;
