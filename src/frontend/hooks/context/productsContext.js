import { createContext, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";

//------------//
export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productState, setProductDispatch] = useReducer(productReducer, {
    cart: [],
    wishList: [],
    obtainUserAddress: [],
    userAddress: {
      hoseNumber: "",
      city: "",
      state: "",
      countaryName: "",
      postalCode: "",
      mobileNumber: "",
    },
  });
  const { cart, wishList, obtainUserAddress, userAddress } = productState;

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
      }}
    >
      {children}
    </productContext.Provider>
  );
};
