import Slider from "react-slick";
import { useContext, useEffect } from "react";
import { MovieDiscuveryCont } from "../../Context/MovieDiscuveryContext/MovieDiscuveryContext";
import Module from "./MovieDiscuvery.module.css";
export default function MovieDiscuvery() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true,
  };

  //////////////////////////////API FOR CAURSEL /////////////////////////
  const {
    MovieDiscuveryCarouselGetAPI,
    MappingDiscovery,
    setMappingDiscovery,
  } = useContext(MovieDiscuveryCont);

  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  async function GetDiscvuverMovies() {
    const response = await MovieDiscuveryCarouselGetAPI();
    setMappingDiscovery(response.results);
    console.log(response.results);
  }

  useEffect(() => {
    GetDiscvuverMovies();
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {MappingDiscovery.map((item) => (
          <div key={item.id}>
            <img
              src={ImagesBasicPath + item.backdrop_path}
              alt="background"
              className={`${Module.MainCarouselStyle} pb-5 mx-auto rounded-5`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

/**
 *     <Slider {...settings} className={Module.slider}>
      {MappingDiscovery.map((item) => (
        <div key={item.id}>
          <img
            src={ImagesBasicPath + item.backdrop_path}
            alt="background"
            className={`${Module.MainCarouselStyle} mx-auto rounded-5`}
            
          />
        </div>
      ))}
    </Slider>
 */

//style={{width: '100%', height: "10%"}}
