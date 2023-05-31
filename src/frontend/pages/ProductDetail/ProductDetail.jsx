import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Audio } from "react-loader-spinner";

import {
  faStar,
  faCartPlus,
  faRightToBracket,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

//internal inports
import "../Authentication/authentication.css";
import "../ProductListing/ProductListing.css";
import "../Home/Home.css";
import { productContext } from "../../hooks/context/productsContext";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [singleProductLoading, setSingleProductLoading] = useState(false);
  const {
    isAddedIntoCart,
    isAddedIntoWishList,
    obtainAddItemToCartApi,
    obtainAddItemToWishListApi,
    deleteWishListItem,
  } = useContext(productContext);
  const { productId } = useParams();

  useEffect(() => {
    async function obtainSingleProduct() {
      try {
        setSingleProductLoading(true);

        const Response = await axios.get(`/api/products/${productId}`);

        setSingleProductLoading(false);
        setSingleProduct(Response.data.product);
      } catch (error) {
        console.log(error);
      }
    }
    obtainSingleProduct();
  }, [productId]);

  const {
    productImg,
    title,
    price,
    prePrice,
    discount,
    rating,
    category,
    _id,
  } = singleProduct;
  return (
    <center key={_id}>
      <div className="single-product-page-case">
        {singleProductLoading ? (
          <h1 style={{ width: "10rem" }}>
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
            <div className="product product-detail-page">
              <img
                className="product-img"
                src={productImg}
                alt="a new collections"
              />
              <div className="product-cantent product-detail-cantent">
                <h2 className="product-name">Title: {title}</h2>
                <h2>
                  price: {price} &nbsp;
                  <span className="card-pre-price">{prePrice}</span>
                </h2>
                <p>{category} </p>
                <div className="rating-stuff">
                  <p>{discount}</p>
                  <p>
                    rating:{" "}
                    <strong>
                      <FontAwesomeIcon icon={faStar} />
                      <em> {rating}</em>
                    </strong>
                  </p>
                </div>
                <div className="cart-wishlist">
                  <div className="addtocart-btn">
                    {isAddedIntoCart(singleProduct) ? (
                      <Link to="/cart">
                        <button className="login-btns">
                          <FontAwesomeIcon icon={faRightToBracket} /> Go to cart
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="login-btns"
                        onClick={() => obtainAddItemToCartApi(singleProduct)}
                      >
                        <FontAwesomeIcon icon={faCartPlus} /> add to cart
                      </button>
                    )}
                  </div>
                  {isAddedIntoWishList(singleProduct) ? (
                    <FontAwesomeIcon
                      icon={faHeartCirclePlus}
                      className="wislist-icon"
                      onClick={() =>
                       
                        deleteWishListItem(singleProduct)
                      }
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="wislist-icon"
                      onClick={() =>
                       
                        obtainAddItemToWishListApi(singleProduct)
                      }
                    />
                  )}
                </div>
              </div>
            </div>
            <Link to="/product-listing">
              <button className="button">
                <span>Go Back </span>
              </button>
            </Link>
          </>
        )}
      </div>
    </center>
  );
};

export { ProductDetail as default };
