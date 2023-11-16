import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FirstImage from "../../Assets/1.jpeg"
import FirstImage2 from "../../Assets/2.jpg"
import FirstImage3 from "../../Assets/3.jpg"


export default function MovieDiscuvery() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      arrows:true,
      fade: true,
    }
  
  return (
    
    <Slider {...settings} className="w-100">
      <div>
        <img src={FirstImage} alt="background"/>
      </div>
      <div>
      <img src={FirstImage2} alt="background"/>
      </div>
      <div>
      <img src={FirstImage3} alt="background"/>
      </div>
    </Slider>
  );
}
