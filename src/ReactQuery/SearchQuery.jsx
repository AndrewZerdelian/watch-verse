/**
 * import axios from "axios";

export default async function SearchQuery(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&language=en-US&page=1`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

 */
