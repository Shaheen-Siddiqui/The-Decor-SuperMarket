export const productReducer = (productState, { type, payload }) => {
  switch (type) {
    case "CART_FUNCTIONS":
      return {
        ...productState,
        cart: payload,
      };
    case "WISHLIST_FUNCTIONS":
      return {
        ...productState,
        wishList: payload,
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
       case "EMPATY_ADDRESS_ORDER_PLACED":
        return{
          ...productState,
          setDeleverAddress:{}
        }

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
        wishList: [],
      };
    default:
      throw new Error(`invelid type ${type} check productReducer`);
  }
};
