// src/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import image1 from '../../assert/images/crypto.png'


const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    centerMode: true, // Enables center mode
    centerPadding: '0',
    focusOnSelect: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds (e.g., 3000ms or 3 seconds)
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1, // Adjust the number of slides for smaller screens
        },
      },
    ],
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image1} alt="Image 2" />
        </div>
        <div>
          <img src={image1} alt="Image 3" />
        </div>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image1} alt="Image 2" />
        </div>
        <div>
          <img src={image1} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;