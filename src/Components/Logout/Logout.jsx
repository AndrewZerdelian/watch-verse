

/**
 * import axios from "axios";
import React, { useEffect } from "react";

export default function Logout() {
  const APIKEY = process.env.REACT_APP_API_KEY;
  async function logoutfromAcount() {
    try {
      const response = await axios.delete(
        `https://api.themoviedb.org/3/authentication/session?api_key=${APIKEY}`,
        {
          request_token: localStorage.removeItem("request_token",response?.data?.request_token),
        }
      );

      console.log(response);
      return response;
    } catch (error) {}
  }

  useEffect(() => {}, [logoutfromAcount]);

  return <div>Logout</div>;
}

 */


/**
 * import React, { useEffect } from "react";

export default function Logout() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const accessToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDdiMjRkZmU5MGNiOTJiYWIyZjQyMDI2ZGRmOGRhNyIsInN1YiI6IjY0YzY0NTU1Y2FkYjZiMDBhYzY2MGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qQtJ_EechHLDtkmDGhavEXqInLrEpa57XMwUVmQLwok';

  async function logoutFromAccount() {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: accessToken,
        },
      };

      const response = await fetch('https://api.themoviedb.org/3/authentication/session?api_key=' + apiKey, options);
      const data = await response.json();

      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    logoutFromAccount();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return <div>Logout</div>;
}
 */