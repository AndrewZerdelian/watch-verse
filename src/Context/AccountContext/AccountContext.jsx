import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenCont } from "../LoginContext/TokenContext";

export const AccountCont = createContext();
const APIKEY = process.env.REACT_APP_API_KEY;
//Better and cleaner code
//Original code below
export default function AccountContextProvider({ children }) {
  const { LocalStorage } = useContext(TokenCont);

  const [Session_id, SETSession_id] = useState("");

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
      SETSession_id(response?.data?.session_id);

      /**
 *       if (response?.data?.session_id) {
        await handleUserResponse() 
        
      } else {
        console.error("ERROR IN USER ID");
      }
 */

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
      console.log("USER ID FROM CONTAXT : "+userResponse.data.id);
      //window.location.reload();
      //moshkila b3d ma b3mil login lazim manual update 
      //favourites msh byshof el userid 3'er m3 restart 
      //el sessionid msh bttshaf fe el local ela b3d restart page 

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
      value={{ POSTAccountDetails, Session_id, SETSession_id }}
    >
      {children}
    </AccountCont.Provider>
  );
}

/** ORIGINAL CODE 
 * import axios from "axios";
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
      console.log(response);
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
          request_token: LocalStorage,
        }
      );
      console.log(response);
      localStorage.setItem("session_id", response?.data?.session_id);
      SETSession_id(response?.data?.session_id);
      //console.log(localStorage.getItem("session_id"));

      /////////////////////////USER ID ////////////////////////////
      if (response?.data?.session_id) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/account?${APIKEY}&session_id=${localStorage.getItem(
              "session_id"
            )}`
          );
          console.log(response);
          console.log(response.data.id);
          localStorage.setItem("account_id", response.data.id);
          window.location.reload(); // untill i find a better solution for favourites
          //and the navbar login not disappearing with the ternary operator
          return response;
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("ERROR IN USER ID ");
      }

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

 */
