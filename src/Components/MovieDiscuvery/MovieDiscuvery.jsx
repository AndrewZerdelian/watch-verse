import Slider from "react-slick";
import { useContext, useEffect } from "react";
import { MovieDiscuveryCont } from "../../Context/MovieDiscuveryContext/MovieDiscuveryContext";
import Module from "./MovieDiscuvery.module.css";
//import { Link } from "react-router-dom";
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
    <div className="container-fluid ">
      <Slider {...settings}>
        {MappingDiscovery.map((item) => (
          <div key={item.id} className="position-relative">
            {/** <Link to={`/BoxOfficeDetails/${item.id}`}> */}
            <img
              src={ImagesBasicPath + item.backdrop_path}
              alt="background"
              className={`${Module.MainCarouselStyle} mx-auto rounded-5 opacity-50`}
            />
            {/**</Link> */}
            <div className={`text-white ${Module.Absolute} w-25 `}>
              <span className={`${Module.PosterFont}`}>{item.title}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

//className="position-absolute bottom-0 start-50 translate-middle-x pb-5 text-danger"
/**
 *   return (
    <div className="container-fluid ">
      <Slider {...settings}>
        {MappingDiscovery.map((item) => (
          <div key={item.id}>
            <img
              src={ImagesBasicPath + item.backdrop_path}
              alt="background"
              className={`${Module.MainCarouselStyle} mx-auto rounded-5 opacity-75  `}
            />
            <h1 className="pb-5 text-danger mx-auto">{item.title}</h1>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}
 */
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
