// External packages
import { Routes, Route } from "react-router-dom";
//internal imports
import "./App.css";
import { Header } from "./frontend/components/Header/Header";
import { ProductListing } from "./frontend/pages/ProductListing/ProductListing";
import { Home } from "./frontend/pages/Home/Home";
import { Cart } from "./frontend/pages/Cart/Cart";
import { WishList } from "./frontend/pages/WishList/WishList";
import { LogIn } from "./frontend/pages/Authentication/Login";
import { SignUp } from "./frontend/pages/Authentication/Signup";

//
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: "10rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
