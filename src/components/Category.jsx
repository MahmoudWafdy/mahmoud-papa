import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  const categories = [
    {
      id: 1,
      icon: <i className="material-icons">phone_android</i>,
      label: "Phone",
      link: "/category/phones",
    },
    {
      id: 2,
      icon: <i className="material-icons">computer</i>,
      label: "Computers",
      link: "/category/computers",
    },
    {
      id: 3,
      icon: <i className="material-icons">watch</i>,
      label: "SmartWatch",
      link: "/category/smartwatch",
    },
    {
      id: 4,
      icon: <i className="fa fa-headphones text-2xl"></i>,
      label: "mobile-accessories",
      link: "/category/mobile-accessories",
    },
    {
      id: 5,
      icon: <i className="material-icons">videogame_asset</i>,
      label: "Gaming",
      link: "/category/gaming",
    },
    {
      id: 6,
      icon: <i className="material-icons">computer</i>,
      label: "Computers",
      link: "/category/computers",
    },
    {
      id: 7,
      icon: <i className="material-icons">videogame_asset</i>,
      label: "Gaming",
      link: "/category/gaming",
    },
    {
      id: 8,
      icon: <i className="material-icons">watch</i>,
      label: "SmartWatch",
      link: "/category/smartwatch",
    },
    {
      id: 9,
      icon: <i className="material-icons">camera_alt </i>,
      label: "Camera",
      link: "/category/camera",
    },
  ];

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1400) {
      setSlidesToShow(6);
    } else if (width >= 1024) {
      setSlidesToShow(5);
    } else if (width >= 768) {
      setSlidesToShow(4);
    } else if (width >= 400) {
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
    const newIndex = isFirstSlide ? categories.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === categories.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const startIndex = currentIndex;
  const endIndex = startIndex + slidesToShow;
  const currentSlides = categories.slice(startIndex, endIndex);
  return (
    <div className=" my-20">
      <div className="flex justify-start items-center gap-3 mb-3">
        <span className="w-5 h-10 bg-secondary inline-block rounded"></span>
        <span className="font-semibold text-secondary">Category</span>
      </div>
      <p className="font-semibold text-2xl md:text-4xl">Browse By Category</p>
      <div className="relative flex flex-col justify-center">
        <div className="absolute flex gap-2 top-[-80px] right-16  w-8 h-8">
          <button className="prevoise" onClick={goToPrevious}>
            <svg
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
          <button className="next" onClick={goToNext}>
            <svg
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

        <div className="slider_container mt-10 mb-5 flex gap-5 overflow-hidden justify-between">
          {currentSlides.map((slide) => (
            <div
              className="flex flex-col justify-center items-center gap-3 border border-solid border-gray-400 w-40 h-36"
              key={slide.id}
            >
              <Link
                to={slide.link}
                className="flex flex-col justify-center items-center gap-3 p-2"
              >
                {slide.icon}
                <p className="text-center">{slide.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
