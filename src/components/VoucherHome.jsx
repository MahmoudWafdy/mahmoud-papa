import { Link } from "react-router-dom";
import Slider from "react-slick";

const settings = {
  dots: true, // Enable dots/pagination
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable automatic sliding
  autoplaySpeed: 4000, // Adjust the speed as needed
  arrows: false, // Enable left and right arrows for control
};
const slides = [
  {
    logo: "apple-logo.png",
    title: "Iphone 14 Series",
    description: "Up to 10% off Voucher",
    image: "../src/img/iphone.png",
  },
  {
    log: "samsung-logo.png",
    title: "Samsung Galaxy S21",
    description: "Limited Time Offer until next month",
    image: "../src/img/samsung.png",
  },
  {
    logo: "apple-logo.png",
    title: "Iphone 14 Series",
    description: "Up to 10% off Voucher",
    image: "../src/img/iphone.png",
  },
  {
    log: "samsung-logo.png",
    title: "Samsung Galaxy S21",
    description: "Limited Time Offer until next month",
    image: "../src/img/samsung.png",
  },
];

const VoucherHome = () => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          className="slide  md:mt-8 w-full items-center p-5"
          key={slide.index}
        >
          <div
            className=" inline-flex flex-col justify-center gap-2 items-start text-white text-xs
           min-h-[200px] md:pt-8 md:pl-8 md:min-h-[350px]"
          >
            <div className="flex justify-start items-center w-full gap-2 md:gap-5">
              <img src={slide.logo} alt="apple logo" className="w-8 md:w-10" />
              <p>{slide.title}</p>
            </div>

            <p className="justify-self-start text-xl md:text-4xl">
              {slide.description}
            </p>
            <Link
              to={"/product"}
              className="underline w-full flex items-center gap-3"
            >
              Shop Now
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="md:py-4 md:pr-8 w-2/3 md:w-1/2">
            <img src={slide.image} alt="iphone" />
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default VoucherHome;
