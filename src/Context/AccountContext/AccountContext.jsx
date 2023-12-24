import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenCont } from "../LoginContext/TokenContext";

export const AccountCont = createContext();
const APIKEY = process.env.REACT_APP_API_KEY;

export default function AccountContextProvider({ children }) {
  const { LocalStorage } = useContext(TokenCont);
  async function POSTAccountDetails({ username, password }) {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?${APIKEY}&`,
        {
          username,
          password,
          request_token: LocalStorage,
        }
      );
      console.log(response.data);
      if (response?.data?.success === true) {
        setTimeout(() => {
          SesionID();
        }, 2000);
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  }
  /// this useeffect needs to wait for a call
  useEffect(() => {
    /// this was for testing as well as the data above and its working
  }, [POSTAccountDetails]);

  ////////////////////////////Session ID /////////////////////////
  const [Session_id, SETSession_id] = useState("");
  async function SesionID() {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/authentication/session/new?${APIKEY}&`,
        {
          request_token:LocalStorage,
        }
      );
      console.log(response.data);
      localStorage.setItem("session_id",response?.data?.session_id)
      SETSession_id(response?.data?.session_id);
      
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AccountCont.Provider
      value={{ POSTAccountDetails, Session_id, SETSession_id }}
    >
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

/**
   * if (response.data.success === true) {
        const response = await axios.post(
          `https://api.themoviedb.org/3/authentication/session/new?${APIKEY}&`,
          {
            request_token: localStorage?.getItem("request_token"),
          }
        );
        return response;
      } else {
        console.log("Session id not found ? ");
      }
   */
