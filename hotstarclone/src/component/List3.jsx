import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/1.webp';
import image2 from '../images/2.webp';
import image3 from '../images/3.webp';
import image4 from '../images/4.webp';
import image5 from '../images/5.webp';
import image6 from '../images/6.webp';
import image7 from '../images/7.webp';


const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
     
  };

  return (
    <div className="container flex flex-col relative pr-9  z-10 rounded-md  gap-2 w-2/6  -mr-96 ml-96 -mt-40">
      <h2 className="text-3xl font-semibold mb-4"></h2>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src={image2} alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src={image3} alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src={image4} alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src={image5} alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src={image6} alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src={image7} alt="" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

