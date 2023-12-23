import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const TokenCont = createContext();

const APIKEY = process.env.REACT_APP_API_KEY;

export default function TokenContextProvider({ children }) {
  const [LocalStorage, SetLocalStorage] = useState("");
  async function GetToken() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/authentication/token/new?${APIKEY}&`
      );

      console.log(response.data);
      if (response?.data?.success === true) {
        localStorage.setItem("request_token", response?.data?.request_token);
        SetLocalStorage(response?.data?.request_token);
      } else {
        alert.log("TOKEN ERROR");
      }
      return response;
    } catch (error) {}
  }
  useEffect(() => {}, [GetToken]);
  return (
    <TokenCont.Provider value={{ GetToken, LocalStorage, SetLocalStorage }}>
      {children}
    </TokenCont.Provider>
  );
}

/** Response from create request token
 * {"success":true,
 * "expires_at":"2023-12-22 18:29:21 UTC",
 * "request_token":"9b91e902c7ac253000869d91c349a8cd3b01d282"}
 */

/** EXAMPLE 
 * body: JSON.stringify({
    username: 'johnny_appleseed',
    password: 'test123',
    request_token: '1531f1a558c8357ce8990cf887ff196e8f5402ec'
  })
 */

/**
 * POST FOR LOGIN AND HOW IT WILL WORK
 *
 * https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&request_token=9b91e902c7ac253000869d91c349a8cd3b01d282&username=AndrewZerdelian&password=ba7bekyavero
 *
 * api_key ===2d7b24dfe90cb92bab2f42026ddf8da7
 *
 * request_token=== 9b91e902c7ac253000869d91c349a8cd3b01d282
 *
 * username=== johnny_appleseed
 *
 *
 * password === test123
 * 
 * RESPONSE 
 * 
 * {
    "success": true,
    "expires_at": "2023-12-22 18:29:21 UTC",
    "request_token": "9b91e902c7ac253000869d91c349a8cd3b01d282"
}
 */
