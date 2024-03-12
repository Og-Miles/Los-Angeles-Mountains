import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carousel1, carousel2 } from "..";

export default function CarouselTree() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          initialSlide: 2,
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
    <div className='mx-auto flex'>
      {/* Add a wrapper div to apply custom styles */}
      <div className='mx-auto flex justify-between gap-2'>
        <Slider
          {...settings}
          className='max-w-[150px] md:max-w-2xl lg:max-w-3xl xl:max-w-5xl'
        >
          <div>
            <img src={carousel1} alt='mountain-man' />
          </div>
          <div>
            <img src={carousel2} alt='mountain' />
          </div>
          <div>
            <img src={carousel1} alt='mountain-man' />
          </div>
          <div>
            <img src={carousel2} alt='mountain' />
          </div>
        </Slider>
      </div>
    </div>
  );
}
