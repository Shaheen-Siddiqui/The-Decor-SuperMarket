import { useContext } from "react";
import {
  faStar,
  faCartPlus,
  faRightToBracket,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Audio } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
//internal imports
import "./ProductListing.css";

import { SideBar } from "../../components/SideBar/SideBar";
import { filterContext } from "../../hooks/context/filterContext";
import { productContext } from "../../hooks/context/productsContext";

export const ProductListing = () => {
  const {
    search,
    filterProductByPriceRange,
    filterBySearch,
    fetchProducts,
    productLoding,
  } = useContext(filterContext);

  const { setProductDispatch, isAddedIntoCart, isAddedIntoWishList } =
    useContext(productContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SideBar />
      <center>
        <h2>Total product: {filterProductByPriceRange.length} </h2>
      </center>
      <div className="all-products-page">
        {productLoding ? (
          <h1 style={{ marginLeft: "40rem" }}>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="blue"
              ariaLabel="loading"
              wrapperClass
            />
            Loading...
          </h1>
        ) : (
          <>
            {!filterBySearch.length ? (
              <h1
                style={{ color: "gray" }}
              >{`Opps! nothing Matches Title: ${search} `}</h1>
            ) : (
              <>
                {filterProductByPriceRange.map((item) => {
                  const {
                    category,
                    rating,
                    discount,
                    prePrice,
                    price,
                    title,
                    productImg,
                    _id,
                  } = item;
                  return (
                    <div className="product" key={_id}>
                      <img
                        className="product-img"
                        src={productImg}
                        alt="a new collections"
                      />
                      <div className="product-cantent">
                        <h2 className="product-name">{title}</h2>
                        <h2>
                          price: {price} &nbsp;{" "}
                          <span className="card-pre-price">{prePrice}</span>
                        </h2>
                        <p>{category} </p>
                        <div className="rating-stuff">
                          <p>{discount}</p>
                          <p>
                            <strong>
                              <FontAwesomeIcon icon={faStar} />
                              <em>{rating}</em>
                            </strong>
                          </p>
                        </div>
                        <div className="cart-wishlist">
                          <div className="addtocart-btn">
                            {isAddedIntoCart(item) ? (
                              <NavLink to="/cart">
                                <button className="login-btns">
                                  <FontAwesomeIcon icon={faRightToBracket} /> Go
                                  to cart
                                </button>
                              </NavLink>
                            ) : (
                              <button
                                className="login-btns"
                                onClick={() => {
                                  setProductDispatch({
                                    type: "ADD_ITEM_TO_CART",
                                    payload: item,
                                  });
                                  toast.success('Added To Cart!',{className:"toast-styling"})
                                }}
                              >
                                <FontAwesomeIcon icon={faCartPlus} /> add to
                                cart
                              </button>
                            )}
                          </div>
                          {isAddedIntoWishList(item) ? (
                            <FontAwesomeIcon
                              icon={faHeartCirclePlus}
                              className="wislist-icon"
                              onClick={() =>{
                                setProductDispatch({
                                  type: "ADD_ITEM_TO_WISHLIST",
                                  payload: item,
                                })
                                toast.error("Remove Item From WishList",{className:'toast-styling'})
                              }
                            
                              }
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faHeart}
                              className="wislist-icon"
                              onClick={() =>
                               { setProductDispatch({
                                  type: "ADD_ITEM_TO_WISHLIST",
                                  payload: item,
                                })
                                toast.success("Added Item To WishList",{className:'toast-styling'})

                              }
                              }
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
