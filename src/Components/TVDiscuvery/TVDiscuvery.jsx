import React, { useContext, useEffect } from "react";
import { TVDiscuveryCont } from "../../Context/TVDiscuveryContext/TVDiscuveryContext";
import Slider from "react-slick";
import Module from "./TVDiscuvery.module.css"

export default function TVDiscuvery() {
  const { TVDiscuveryGETAPI, TVMapping, setTVMapping, } =
    useContext(TVDiscuveryCont);
    const  ImagesBasicPath = "https://image.tmdb.org/t/p//original/";
  ///////////////////////////////SETTING API  ///////////////////////
  async function GetTVDiscuvery() {
    const response = await TVDiscuveryGETAPI();
    setTVMapping(response);
    console.log(response);
  }

  useEffect(() => {
    GetTVDiscuvery();
  }, []);

  //////////////////////////////CAROUSEL /////////////////////////////
  const settings  = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    arrows: false,
  };
  return (
    <div >
      <h2 className="fw-bold text-white opacity-100 "> TV Shows </h2>
      <Slider {...settings } >
        {TVMapping.map((item) => (
          <div key={item.id}>
            <img
              src={ImagesBasicPath + item.backdrop_path}
              alt="background"
              className= {`w-100 px-3 ${Module.Scalling} rounded-5 `} 
              
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}



/**
 * import React from "react";
import { useContext } from "react";

import Slider from "react-slick";

export default function TVDiscuvery() {
  const { TVDiscuveryGETAPI, TVMapping, setTVMapping, ImagesBasicPath } =
    useContext(TVDiscuvery);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
      }

      
  async function TVSHOWSAPI() {
    const response = await TVDiscuveryGETAPI();
    setTVMapping(response.results);
    console.log(response.results);
  }

  return <div></div>;
}



 */

/**
 * Carousel MODEL TO BE ADDED 
 * 
 * import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
 */
