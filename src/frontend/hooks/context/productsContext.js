import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";
import { authContext } from "../context/authContext";
import axios from "axios";
//------------//
export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const { token } = useContext(authContext);
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

  const getCartItem = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: token },
      });
      console.log(response.data.cart, "response");
    } catch (error) {
      console.log(error);
    }
  };
  getCartItem();

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
      }}
    >
      {children}
    </productContext.Provider>
  );
};
