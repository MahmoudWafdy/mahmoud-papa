import Slider from "react-slick";

const CustomSlider = ({ slides }) => {
  const settings = {
    dots: true, // Enable dots/pagination
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Adjust the speed as needed
    arrows: true, // Enable left and right arrows for control
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.title} className="slider-image" />
          <div className="slider-caption">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
