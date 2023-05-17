import { faL } from "@fortawesome/free-solid-svg-icons";

export const productReducer = (productState, { type, payload }) => {
  switch (type) {
    case "SEARCH_PRODUCTS":
      return {
        ...productState,
        search: payload,
      };
    case "FILTER_BEDS":
      return {
        ...productState,
        beds: !payload,
        filteredArray: productState.filteredArray.includes("Bed")
          ? productState.filteredArray.filter((value) => value !== "Bed")
          : [...productState.filteredArray, "Bed"],
      };

    case "FILTER_DRESSING_TABLES":
      return {
        ...productState,
        dressingTables: !payload,
        filteredArray: productState.filteredArray.includes("Dressing Table")
          ? productState.filteredArray.filter(
              (item) => item !== "Dressing Table"
            )
          : [...productState.filteredArray, "Dressing Table"],
      };
    case "FILTER_SOFAS":
      return {
        ...productState,
        sofa: !payload,
        filteredArray: productState.filteredArray.includes("Sofa")
          ? productState.filteredArray.filter((item) => item !== "Sofa")
          : [...productState.filteredArray, "Sofa"],
      };

    case "FILTER_LUXURY_SET":
      return {
        ...productState,
        luxurySets: !payload,
        filteredArray: productState.filteredArray.includes("Luxury set")
          ? productState.filteredArray.filter((item) => item !== "Luxury set")
          : [...productState.filteredArray, "Luxury set"],
      };
    case "SORT_BY_PRICE":
      return {
        ...productState,
        sort: payload,
      };
    case "RATINGS":
      return {
        ...productState,
        rating: payload,
      };
    case "PRICE_RANGE":
      return{
        ...productState,
        priceRange:payload

      }
    case "RESET_ALL_FILTER":
    return{
      filteredArray:[],
      sort:null,
      search:'',
      rating:'',
      sofa:false,
      beds:false,
      luxurySets:false,
      dressingTables:false,
      priceRange:1200,
    }

    default:
      throw new Error(`invelid type ${type} check-> productReducer`);
  }
};
