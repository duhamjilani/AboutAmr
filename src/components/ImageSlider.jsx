import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import'./ImageSlider.css'
// Import your images


const ImageSlider = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div className='SizeImage'>
        <img src="https://www.hbibi.net/images/choft.jpg" alt="Image 1"  />
      </div>
      <div className='SizeImage'>
        <img src="https://i.pinimg.com/originals/91/85/4d/91854ddca4b47979d0d619ea5ed0257f.jpg"  alt="Image 2" />
      </div>
      <div className='SizeImage'>
        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://amrdiab.net/wp-content/uploads/2020/02/Sahran-1.jpg"  alt="Image 3" />
      </div>
    </Slider>
    </div>
  );
};

export default ImageSlider;

