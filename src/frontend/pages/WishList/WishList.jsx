import { NavLink } from "react-router-dom";
import {
  faStar,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

//internal imports
import { emaptyWishList, image1 } from "../../assets";
import "./WishList.css";
export const WishList = () => {
  return (
    <div>
      <div className="cart-case">
        <h1>Products In My Wish List Is (0)</h1>
        {/* <img
          className="emapty-cart-img"
          src={emaptyWishList}
          alt="emapty cart message"
        />
        <center>
          <NavLink to="/product-listing">
            <button className="button">
              <span>Shop Now!! </span>
            </button>
          </NavLink>
        </center> */}
      </div>
      <div className="wishlist-product-case">
        <div className="product wishlist-product">
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            className="remove-wishlist"
          />
          <img className="product-img" src={image1} alt="a new collections" />

          <div className="product-cantent">
            <h2 className="product-name">product name</h2>
            <h2>price: 900</h2>
            <p>Lorem, ipsum dolor sit amet consectetur </p>
            <div className="rating-stuff">
              <p>78% off</p>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faStar} />
                  <em>3</em>
                </strong>
              </p>
            </div>
            <div className="addtocart-btn">
              <button className="login-btns max-width-btn">
                <FontAwesomeIcon icon={faCartShopping} /> Move To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
