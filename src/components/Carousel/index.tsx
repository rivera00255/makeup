import React from 'react';
import Slider from 'react-slick';
import StyledCarousel from './StyledCarousel';
import Image01 from '../../assets/images/banner_1920_01.jpg';
import Image02 from '../../assets/images/banner_1920_02.jpg';
import Image03 from '../../assets/images/banner_1920_03.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <div css={StyledCarousel}>
      <Slider {...settings}>
        <div className="slide">
          <img src={Image01} alt="cosmetics" />
        </div>
        <div className="slide">
          <img src={Image02} alt="cosmetics" />
        </div>
        <div className="slide">
          <img src={Image03} alt="cosmetics" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
