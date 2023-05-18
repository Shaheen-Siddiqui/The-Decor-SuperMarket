export const productReducer = (productState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...productState,
        cart:
          productState.cart.find((item) => item._id === payload._id) !==
          undefined
            ? productState.cart
            : [...productState.cart, payload],
      };
    case "ADD_ITEM_TO_WISHLIST":
      return {
        ...productState,
        wishList:
          productState.wishList.find((item) => item._id === payload._id) !==
          undefined
            ? productState.wishList.filter((item) => item._id !== payload._id)
            : [...productState.wishList, payload],
      };
    case "MOVE_ITEM_TO_CART":
      return {
        ...productState,
        wishList: productState.wishList.filter(
          ({ _id }) => _id !== payload._id
        ),
        cart: [...productState.cart, payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...productState,
        wishList: productState.wishList.filter(
          ({ _id }) => _id !== payload._id
        ),
      };
    case "MOVE_ITEM_TO_WISHLIST":
      return {
        ...productState,
        cart: productState.cart.filter(({ _id }) => _id !== payload._id),
        wishList: [...productState.wishList, payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...productState,
        cart: productState.cart.filter(({ _id }) => _id !== payload._id),
      };
    case "PRODUCT_QUANTITY_INCREMENT":
      return {
        ...productState,
        cart: productState.cart.map((item) =>
          item._id == payload._id
            ? { ...item, quantity: item.quantity++ }
            : item
        ),
      };
    case "PRODUCT_QUANTITY_DECREMENT":
      return {
        ...productState,
        cart: productState.cart.map((item) =>
          item._id === payload._id
            ? { ...item, quantity: item.quantity-- }
            :  item
        ).filter(({quantity})=> quantity!==0)
      };                       

    default:
      throw new Error(`invelid type ${type} check productReducer`);
  }
};
