import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IconCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  let Icons = [
    {
      id: 0,
      title: "Icon Title",
    },
    {
      id: 1,
      title: "Icon Title",
    },
    {
      id: 2,
      title: "Icon Title",
    },
    {
      id: 3,
      title: "Icon Title",
    },
    {
      id: 4,
      title: "Icon Title",
    },
    {
      id: 5,
      title: "Icon Title",
    },
  ];
  return (
    <div className="IconCarousel">
      <Slider {...settings}>
        {Icons.map((e, i) => {
          return <div className="exploreBox">{e.title}</div>;
        })}
      </Slider>
    </div>
  );
};

export default IconCarousel;
