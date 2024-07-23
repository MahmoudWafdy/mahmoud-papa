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
  arrows: false, // Enable left and right arrows for control
  responsive: [
    {
      breakpoint: 768, // phone screen
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024, // larger screen
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
    <div className="Flash_slider">
      <div className="relative flex flex-col justify-center ">
        <div className="absolute flex justify-between  z-10 top-32 left-0 right-0 md:left-auto md:gap-2 md:top-[-50px] md:right-16">
          <button className="prevoise  ">
            <svg
              className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-black border-solid md:border-none"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M22 16L15 23L22 30M15 23H31"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="next ">
            <svg
              className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-black border-solid md:border-none"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M14.5 23H31M31 23L24 16M31 23L24 30"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="slider_container mt-10 mb-5 flex gap-5 overflow-hidden justify-center"></div>
      </div>

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
      <button className="bg-secondary text-white py-3 px-6 mx-auto ">
        <Link to={"category/electronics"}>View All Products</Link>
      </button>
    </div>
  );
};
export default FlashSaleSlider;
