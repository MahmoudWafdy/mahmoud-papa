import { useEffect, useMemo, useState } from "react";
// import "./ProductCard.css";
import { UseFetchData } from "../UseFetchData";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const FlashSaleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

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

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidesToShow(4);
    } else if (width >= 768) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(result.length / slidesToShow) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide =
      currentIndex === Math.ceil(result.length / slidesToShow) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const startIndex = currentIndex * slidesToShow;
  const endIndex = startIndex + slidesToShow;
  const currentSlides = result.slice(startIndex, endIndex);

  return (
    <div className="relative flex flex-col justify-center ">
      <div className="absolute flex justify-between  z-10 top-32 left-0 right-0 md:left-auto md:gap-2 md:top-[-50px] md:right-16">
        <button className="prevoise  " onClick={goToPrevious}>
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
        <button className="next " onClick={goToNext}>
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

      <div className="slider_container mt-10 mb-5 flex gap-5 overflow-hidden justify-center">
        {currentSlides.map((product) => (
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
      <button className="bg-secondary text-white py-3 px-6 mx-auto ">
        <Link to={"category/electronics"}>View All Products</Link>
      </button>
    </div>
  );
};
export default FlashSaleSlider;
