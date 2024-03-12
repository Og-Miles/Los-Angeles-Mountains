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
    <div className='mx-auto min-h-full flex'>
      <Slider
        {...settings}
        className='w-4/5 lg:w-2/3 xl:w-1/2 mx-auto flex justify-between gap-2'
      >
        <div>
          <img src={carousel1} alt='mountain-man' className='max-w-full' />
        </div>
        <div>
          <img src={carousel2} alt='mountain' className='max-w-full' />
        </div>
        <div>
          <img src={carousel1} alt='mountain-man' className='max-w-full' />
        </div>
        <div>
          <img src={carousel2} alt='mountain' className='max-w-full' />
        </div>
      </Slider>
    </div>
  );
}
