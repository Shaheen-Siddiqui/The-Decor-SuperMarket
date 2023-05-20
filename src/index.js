import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./frontend/hooks/context/filterContext";
import { ProductContextProvider } from "./frontend/hooks/context/productsContext";
import { AuthContextProveder } from "./frontend/hooks/context/authContext";
// for starting app with mockMan
import { makeServer } from "./server";

makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProveder>
      <ProductContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </ProductContextProvider>
    </AuthContextProveder>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
