// External packages
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RotatingLines } from "react-loader-spinner";

// lazy loads for optimised the code performance
import "./App.css";
import { RequireAuth } from "./RequireAuth";
import Mockman from "mockman-js";
const Home = lazy(() => import("./frontend/pages/Home/Home"));
const Cart = lazy(() => import("./frontend/pages/Cart/Cart"));
const Header = lazy(() => import("./frontend/components/Header/Header"));
const ProductListing = lazy(() =>
  import("./frontend/pages/ProductListing/ProductListing")
);
const ProductDetail = lazy(() =>
  import("./frontend/pages/ProductDetail/ProductDetail")
);
const WishList = lazy(() => import("./frontend/pages/WishList/WishList"));
const LogIn = lazy(() => import("./frontend/pages/Authentication/Login"));
const SignUp = lazy(() => import("./frontend/pages/Authentication/Signup"));
const ProductListingCategoryWise = lazy(() =>
  import("./frontend/pages/ProductDetail/ProductListingCategoryWise")
);
const UserProfile = lazy(() =>
  import("./frontend/pages/UserProfile/UserProfile")
);

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
      </Suspense>
      <div style={{ marginTop: "10rem" }}>
        <Suspense
          fallback={
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />

            {/* *******PRIVATE PAGES*******   */}
            <Route
              path="/cart"
              element={
                <RequireAuth>
                  <Cart />
                </RequireAuth>
              }
            />
            <Route
              path="/wish-list"
              element={
                <RequireAuth>
                  <WishList />
                </RequireAuth>
              }
            />
            <Route
              path="user-profile"
              element={
                <RequireAuth>
                  <UserProfile />
                </RequireAuth>
              }
            />
            {/*  -------------------------*/}

            <Route path="/login" element={<LogIn />} />
            <Route path="/product-listing" element={<ProductListing />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/product-detail/:productId"
              element={<ProductDetail />}
            />
            <Route path="/mock" element={<Mockman />} />
            <Route
              path="/product-listing/:categoriesName"
              element={<ProductListingCategoryWise />}
            />

            {/* '404.' pending */}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
