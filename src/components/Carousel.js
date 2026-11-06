import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    "/assets/carousel-1.png",
    "/assets/carousel-2.png",
    "/assets/carousel-3.png",
    "/assets/carousel-4.png",
    "/assets/carousel-5.png",
    "/assets/carousel-6.png",
  ];

  return (
    <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`Service slide ${i + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
    </Slider>
  );
}