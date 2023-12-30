import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenCont } from "../LoginContext/TokenContext";

export const AccountCont = createContext();
const APIKEY = process.env.REACT_APP_API_KEY;

export default function AccountContextProvider({ children }) {
  const { LocalStorage } = useContext(TokenCont);

  const [Session_id, SETSession_id] = useState(
    localStorage.getItem("session_id")
  );
    const [LoadingAnimation,SetLoadingAnimation] = useState(null);
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
      SetLoadingAnimation(true)
      console.log(response);

      if (response?.data?.success === true) {
        await SesionID();
      }

      return response;
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  async function SesionID() {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/authentication/session/new?${APIKEY}&`,
        {
          request_token: LocalStorage,
        }
      );

      console.log(response);

      localStorage.setItem("session_id", response?.data?.session_id);
      SETSession_id(localStorage.getItem("session_id"));
      return response;
    } catch (error) {
      console.error("Session ID retrieval failed:", error);
    }
  }

  async function handleUserResponse() {
    try {
      const userResponse = await axios.get(
        `https://api.themoviedb.org/3/account?${APIKEY}&session_id=${Session_id}`
      );

      localStorage.setItem("account_id", userResponse.data.id);
      console.log("USER ID FROM CONTAXT : " + userResponse.data.id);
      SetLoadingAnimation(false);
      return userResponse;
    } catch (error) {
      console.error("User ID retrieval failed:", error);
    }
  }

  useEffect(() => {
    if (Session_id) {
      // if sessionid is true call handleUserResponse
      handleUserResponse();
    }
  }, [Session_id]);

  return (
    <AccountCont.Provider
      value={{ POSTAccountDetails, Session_id, SETSession_id,LoadingAnimation,SetLoadingAnimation }}
    >
      {children}
    </AccountCont.Provider>
  );
}
