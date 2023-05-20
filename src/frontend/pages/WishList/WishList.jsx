import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  faStar,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

//internal imports
import {  emaptyWishList } from "../../assets";
import { productContext } from "../../hooks/context/productsContext";
import "./WishList.css";




export const WishList = () => {
  const { wishList, setProductDispatch, isAddedIntoCart } =
    useContext(productContext);
  return (
    <div>
      <center>
        <h1>Products In My Wish List Is {`(${wishList.length})`}</h1>
      </center>
      {!wishList.length ? (
        <div className="cart-case">
          <img
            className="emapty-cart-img"
            src={emaptyWishList}
            alt="emapty cart message"
          />
          <center>
            <Link to="/product-listing">
              <button className="button">
                <span>Shop Now!! </span>
              </button>
            </Link>
          </center>
        </div>
      ) : (
        <div className="wishlist-product-case">
          {wishList.map((item) => {
            const {
              category,
              price,
              title,
              productImg,
              discount,
              rating,
              _id,
            } = item;
            return (
              <div className="product wishlist-product" key={_id}>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2xl"
                  className="remove-wishlist"
                  onClick={() => {
                    setProductDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    });
                    toast.error("Removed From WishList", {
                      className: "toast-styling",
                    });
                  }}
                />
                <img
                  className="product-img"
                  src={productImg}
                  alt="a new collections"
                />

                <div className="product-cantent">
                  <h2 className="product-name">{category}</h2>
                  <h2>price: {price}</h2>
                  <p>{title}</p>
                  <div className="rating-stuff">
                    <p>{discount}</p>
                    <p>
                      <strong>
                        <FontAwesomeIcon icon={faStar} />
                        <em>{rating}</em>
                      </strong>
                    </p>
                  </div>
                  <div className="addtocart-btn">
                    {isAddedIntoCart(item) ? (
                      <Link to="/cart">
                        <button className="login-btns max-width-btn">
                          <FontAwesomeIcon icon={faCartShopping} /> Already In
                          Cart: [Go]
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="login-btns max-width-btn"
                        onClick={() => {
                          setProductDispatch({
                            type: "MOVE_ITEM_TO_CART",
                            payload: item,
                          });
                          toast.success("Moved To Cart", {
                            className: "toast-styling",
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faCartShopping} /> Move To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export {WishList as default}

