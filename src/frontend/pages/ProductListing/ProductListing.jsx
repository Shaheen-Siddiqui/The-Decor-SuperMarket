import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

//internal imports
import "./ProductListing.css";

import { SideBar } from "../../components/SideBar/SideBar";
import { image1 } from "../../assets";
import { ProductContext } from "../../hooks/context/ProductContext";
import { useContext, useState } from "react";

export const ProductListing = () => {
  const { filterProductByRating,search,filterProductByPriceRange } =
    useContext(ProductContext);
  return (
    <>
      <SideBar />
      <div className="all-products-page">
            {/* <h1>{filterProductByCategories.length}</h1><br/>
            <h1>{`No Products Matches Title:`} </h1> */}
          <>
            {filterProductByPriceRange.map(
              ({
                category,
                rating,
                discount,
                prePrice,
                price,
                title,
                productImg,
              }) => {
                return (
                  <div className="product">
                    <img
                      className="product-img"
                      src={productImg}
                      alt="a new collections"
                    />
                    <div className="product-cantent">
                      <h2 className="product-name">{title}</h2>
                      <h2>
                        price: {price} &nbsp;{" "}
                        <span className="card-pre-price">{prePrice}</span>{" "}
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
                          <button className="login-btns">
                            <FontAwesomeIcon icon={faCartPlus} /> add to cart
                          </button>
                        </div>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="wislist-icon"
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </>
      </div>
    </>
  );
};
