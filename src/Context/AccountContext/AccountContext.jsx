import axios from "axios";
import React, { createContext, useEffect } from "react";

export const AccountCont = createContext();
const APIKEY = process.env.REACT_APP_API_KEY;

export default function AccountContextProvider({ children }) {
  async function POSTAccountDetails({ username, password }) {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?${APIKEY}&`,
        {
          username,
          password,
          request_token: localStorage.getItem("request_token"),
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  /// this useeffect needs to wait for a call
  useEffect(() => {
    /// this was for testing as well as the data above and its working
  }, [POSTAccountDetails]);

  return (
    <AccountCont.Provider value={{ POSTAccountDetails }}>
      {children}
    </AccountCont.Provider>
  );
}
/** TESTING 
 * {
          username: "",
          password: "",
          request_token: localStorage.getItem("request_token"),
        }
 */

/**
  username: 'johnny_appleseed',
  password: 'test123',
  request_token: '1531f1a558c8357ce8990cf887ff196e8f5402ec'
         */
