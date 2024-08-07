// src/components/SliderComponent.js
import Slider from "react-slick";

const SliderComponent = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-16">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <div className="w-56 border-solid border border-gray-400">
              <div className="group relative bg-gray-100 h-54">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-1 top-1 flex flex-col gap-2">
                  <button>
                    <i className="fa fa-heart-o"></i>
                  </button>
                  <button>
                    <i className="fa fa-eye"></i>
                  </button>
                </div>
                <button
                  className="bg-black absolute left-0 right-0 bottom-0 text-white text-center w-full
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer py-2"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <h2 className="text-lg font-bold mt-2">{slide.title}</h2>
                <p className="flex gap-3">
                  <span className="text-gray-600">{slide.price}$</span>
                  <span>{`$ ${(
                    slide.price -
                    (slide.price * slide.discountPercentage) / 100
                  ).toFixed(2)}`}</span>
                </p>
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    {/* Add your rating SVGs here */}
                  </div>
                  <p>({slide.reviews})</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
