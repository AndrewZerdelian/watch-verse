import axios from "axios";
import React, { createContext, useState } from "react";

export const QueryContext = createContext();

export default function CoomingSoonQueryApiContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);

  async function comingSoonQueryApi(page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=true&include_video=true&language=en-US&page=${page}`
      );
      return response.data; // Assuming you want to return the data property from the response
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error to be caught by React Query
    }
  }

  return (
    <QueryContext.Provider
      value={{ currentPage, setCurrentPage, comingSoonQueryApi }}
    >
      {children}
    </QueryContext.Provider>
  );
}

/**
 * import axios from "axios";

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



 */
