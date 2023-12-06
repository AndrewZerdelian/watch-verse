import axios from "axios";

export default async function CoomingSoonQueryApi() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=true&include_video=true&language=en-US&page=1`
    );
    //console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

/**
 * import axios from "axios";
import React from "react";

export default async function CoomingSoonQueryApi() {

   async function GETCoomingSoonQuery() {
    const response = await axios.get(``);
    console.log(response);
    return response;
  }
  return <div>CoomingSoonQueryApi</div>;
}

 */
