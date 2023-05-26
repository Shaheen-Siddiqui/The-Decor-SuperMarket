import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//------------//
export const productContext = createContext();
export const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [productState, setProductDispatch] = useReducer(productReducer, {
    cart: [],
    wishList: [],
    obtainUserAddress: [],
    setDeleverAddress: {},
    userAddress: {
      userName: "",
      hoseNumber: "",
      city: "",
      state: "",
      countaryName: "",
      postalCode: "",
      mobileNumber: "",
      coupanApplyOnTotalAmount: 0,
    },
  });
  const {
    cart,
    wishList,
    obtainUserAddress,
    userAddress,
    setDeleverAddress,
    coupanApplyOnTotalAmount,
  } = productState;

  const encodedToken = localStorage.getItem("token");
  
  const obtainAddItemToCartApi = async (product) => {
    try {
      const response = await axios.post(
        `/api/user/cart`,
        { product },
        { headers: { authorization: encodedToken } }
      );
      setProductDispatch({
        type: "ADD_ITEM_TO_CART",
        payload: response.data.cart,
      });

      toast.success("Added To Cart!", {
        className: "toast-styling",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItem = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      console.log(encodedToken, "token");
      if (encodedToken!==null) {
        console.log(encodedToken, "token");
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: encodedToken },
        });

        setProductDispatch({
          type: "ADD_ITEM_TO_CART",
          payload: response.data.cart,
        });
        console.log(response.data.cart, "newcart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  const getWishListItem = async () => {
    // if (encodedToken !== null) {
    //   try {
    //     const response = await axios.get("/api/user/wishlist", {
    //       headers: { authorization: encodedToken },
    //     });
    //     setProductDispatch({
    //       type: "ADD_ITEM_TO_WISHLIST",
    //       payload: response.data.wishList,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  const obtainAddItemToWishListApi = async (product) => {
    // try {
    //   const response = await axios.post(
    //     "/api/user/wishlist",
    //     { product },
    //     { headers: { authorization: encodedToken } }
    //   );
    //   setProductDispatch({
    //     type: "ADD_ITEM_TO_WISHLIST",
    //     payload: response.data.wishlist,
    //   });
    //   toast.success("Added Item To WishList", {
    //     className: "toast-styling",
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const priceOfProductsWithQuantity = cart.reduce(
    (acc, { prePrice, quantity }) => (acc = acc + Number(prePrice)) * quantity,
    0
  );

  const discounts = (priceOfProductsWithQuantity * 45) / 100;
  const totalPrice = priceOfProductsWithQuantity - discounts;

  const productsName = cart.map((value) => value);

  const isAddedIntoCart = (productItem) =>
    cart.find((item) => item._id == productItem._id);

  const isAddedIntoWishList = (productItem) =>
    wishList.find((item) => item._id == productItem._id);

  return (
    <productContext.Provider
      value={{
        cart,
        wishList,
        setProductDispatch,
        isAddedIntoCart,
        isAddedIntoWishList,
        obtainUserAddress,
        userAddress,
        priceOfProductsWithQuantity,
        discounts,
        totalPrice,
        productsName,
        setDeleverAddress,
        coupanApplyOnTotalAmount,
        getCartItem,
        obtainAddItemToCartApi,
        obtainAddItemToWishListApi,
        getWishListItem,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
