import { useMemo } from "react";
import _ from "lodash";
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

const OurProducts = () => {
  const filters = useMemo(
    () => ({
      bestSelling: true,
      highestRated: true,
      maxPrice: 500,
    }),
    []
  ); // Use useMemo to avoid re-creating the filters object on every render

  const { result, error } = UseFetchData("medicin", filters);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="our_product relative flex flex-col justify-center my-10">
      <div className="flex justify-start items-center gap-3 mb-3">
        <span className="w-5 h-10 bg-secondary inline-block rounded"></span>
        <span className="font-semibold text-secondary">Our Products</span>
      </div>
      <div className="flex gap-8 md:gap-16 items-center mb-10">
        <div className="font-semibold text-xl md:text-4xl">
          Explore Our Products
        </div>
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
      <Slider {...settings} arrows={false} autoplaySpeed={6000}>
        {_.shuffle(result).map((product) => (
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
      <button className="bg-secondary text-white py-3 px-6 mx-auto mt-5 transition hover:scale-105 hover:shadow-md ease-in-out duration-300">
        <Link to={"/medicin"}>View All Products</Link>
      </button>
    </div>
  );
};
export default OurProducts;
