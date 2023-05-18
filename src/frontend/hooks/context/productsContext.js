import { createContext, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";  



//------------//
export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productState, setProductDispatch] = useReducer(productReducer, {
    cart: [],
    wishList: [],
  });
  const { cart, wishList } = productState;

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
      }}
    >
      {children}
    </productContext.Provider>
  );
};
