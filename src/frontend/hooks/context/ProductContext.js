import { createContext, useEffect, useReducer, useState } from "react";
import { productReducer } from "../reducer/ProductReducer";
import axios from "axios";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [productState, setProductDispatch] = useReducer(productReducer, {
    cart: [],
    wishList: [],
    filteredArray: [],
    sort: null,
    search: "",
    rating: "",
    sofa: false,
    beds: false,
    luxurySets: false,
    dressingTables: false,
    priceRange: 1200,
  });
  const {
    sort,
    search,
    filteredArray,
    rating,
    beds,
    sofa,
    luxurySets,
    dressingTables,
    priceRange,
  } = productState;

  useEffect(() => {
    async function fetchProducts() {
      const Response = await axios.get("/api/products");
      setProducts(Response.data.products);
    }
    fetchProducts();
  }, []);

  let filterBySearch =
    search.length > 0
      ? products.filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase())
        )
      : products;

  let filterProductByCategories =
    filteredArray.length > 0
      ? filterBySearch.filter(({ category }) =>
          filteredArray.some((item) => item == category)
        )
      : filterBySearch;

  let sortProductByPrice = sort
    ? filterProductByCategories.sort((a, b) =>
        sort === "high_to_low" ? b.price - a.price : a.price - b.price
      )
    : filterProductByCategories;

  let filterProductByRating = rating
    ? sortProductByPrice.filter((item) => item.rating >= rating)
    : sortProductByPrice;

  const filterProductByPriceRange = priceRange
    ? filterProductByRating.filter(({ price }) => Number(price) <= priceRange)
    : filterProductByRating;

  return (
    <ProductContext.Provider
      value={{
        setProductDispatch,
        filterProductByPriceRange,
        priceRange,
        search,
        rating,
        sort,
        beds,
        sofa,
        luxurySets,
        dressingTables,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
