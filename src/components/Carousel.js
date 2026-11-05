import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 4
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
    <div className="carousel">
      <div>
        {images.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`Service slide ${i + 1}`}
              className="slick-carousel"
            />
          </div>
        ))}
      </div>
    </div>
  );
}