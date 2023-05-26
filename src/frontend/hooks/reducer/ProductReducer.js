export const productReducer = (productState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...productState,
        cart: payload,
      };
    case "ADD_ITEM_TO_WISHLIST":
      return {
        ...productState,
        wishList: payload,
       
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
          item._id === payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "PRODUCT_QUANTITY_DECREMENT":
      return {
        ...productState,
        cart: productState.cart
          .map((item) =>
            item._id === payload._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(({ quantity }) => quantity !== 0),
      };

    case "SET_USER_ADDRESS":
      const { name, value } = payload;
      return {
        ...productState,
        userAddress: {
          ...productState.userAddress,
          [name]: value,
        },
      };

    case "ADDRESS_FORM_SUBMIT":
      return {
        ...productState,
        obtainUserAddress: [
          ...productState.obtainUserAddress,
          productState.userAddress,
        ],
        userAddress: {
          userName: "",
          hoseNumber: "",
          city: "",
          state: "",
          countaryName: "",
          postalCode: "",
          mobileNumber: "",
        },
      };
    case "SET_DUMMY_ADDRESS":
      return {
        ...productState,
        userAddress: {
          userName: "",
          hoseNumber: "E-170/ Okhla industerial area",
          city: "New Delhi",
          state: "Delhi",
          countaryName: "India/Bharat desh",
          postalCode: "110020",
          mobileNumber: "7624874172",
        },
      };
    case "DELETE_ADDRESS":
      return {
        ...productState,
        obtainUserAddress: productState.obtainUserAddress.filter(
          (item, id) => id !== payload
        ),
      };

    case "EDIT_ADDRESS":
      return {
        ...productState,
        obtainUserAddress: productState.obtainUserAddress.filter(
          (_, id) => id !== payload
        ),
        userAddress: productState.obtainUserAddress.find(
          (_, id) => id === payload
        ),
      };
    case "SELECTED_INPUT_ADDRESS":
      return {
        ...productState,
        setDeleverAddress: productState.obtainUserAddress.find(
          (_, id) => id === payload
        ),
      };
    case "COUPAN_APPLIED":
      return {
        ...productState,
        coupanApplyOnTotalAmount: payload,
      };
    case "USER_LOGGED_OUT":
      return {
        ...productState,
        cart: [],
        wishList:[]
      };
    default:
      throw new Error(`invelid type ${type} check productReducer`);
  }
};
