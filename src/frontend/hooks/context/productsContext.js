import { createContext, useState, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//------------//
export const productContext = createContext();
export const ProductContextProvider = ({ children }) => {
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

  
  const obtainAddItemToCartApi = async (product) => {
    const encodedToken = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `/api/user/cart`,
        { product },
        { headers: { authorization: encodedToken } }
      );
      setProductDispatch({
        type: "CART_FUNCTIONS",
        payload: response.data.cart,
      });

      toast.success("Added To Cart!", {
        className: "toast-styling",
      });
    } catch (error) {
      console.log(error);
      
      toast.error("unable to add in cart! please Log in again", {
        className: "toast-styling",
        autoClose:2500
      });

    }
  };

  const getCartItem = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      if (encodedToken !== null) {
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: encodedToken },
        });

        setProductDispatch({
          type: "CART_FUNCTIONS",
          payload: response.data.cart,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = async (productId, isOnCheckout) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: encodedToken },
      });

      setProductDispatch({
        type: "CART_FUNCTIONS",
        payload: response.data.cart,
      });
      isOnCheckout &&
        toast.error("Romoved From Cart", {
          className: "toast-styling",
        });
    } catch (error) {
      console.log(error);
    }
  };

  const orderPlacedItemDelete = () => {
    try {
      for (let i = 0; i < cart.length; i++) {
        deleteCartItem(cart[i]._id, false);
      }
      toast.success("empaty cart successfully", { className: "toast-styling" });
    } catch (error) {
      toast.error("issue to empty cart");
    }
  };

  const incrementCartItems = async (productId, changeType) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: changeType === "increment" ? "increment" : "decrement",
          },
        },
        { headers: { authorization: encodedToken } }
      );
      setProductDispatch({
        type: "CART_FUNCTIONS",
        payload: response.data.cart,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const obtainAddItemToWishListApi = async (product) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: encodedToken } }
      );
      setProductDispatch({
        type: "WISHLIST_FUNCTIONS",
        payload: response.data.wishlist,
      });
      toast.success("Added To WishList", {
        className: "toast-styling",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getWishListItem = async () => {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken !== null) {
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: { authorization: encodedToken },
        });
        setProductDispatch({
          type: "WISHLIST_FUNCTIONS",
          payload: response.data.wishlist,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteWishListItem = async (productId) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: encodedToken },
      });
      setProductDispatch({
        type: "WISHLIST_FUNCTIONS",
        payload: response.data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const priceOfProductsWithQuantity = cart.reduce(
    (acc, { prePrice, qty }) => (acc = acc + Number(prePrice)) * qty,
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

        getWishListItem,
        obtainAddItemToWishListApi,
        deleteWishListItem,

        deleteCartItem,
        incrementCartItems,

        orderPlacedItemDelete,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
