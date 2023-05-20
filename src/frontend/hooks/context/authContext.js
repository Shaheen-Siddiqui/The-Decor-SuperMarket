import { createContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";

export const authContext = createContext(null);

export const AuthContextProveder = ({ children }) => {
  const [{token}, setAuthDispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  });
  
  return (
    <authContext.Provider value={{ setAuthDispatch,token }}>
      {children}
    </authContext.Provider>
  );
};
