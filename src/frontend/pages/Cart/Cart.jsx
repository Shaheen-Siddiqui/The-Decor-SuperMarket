import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

//internal imports
import "./Cart.css";
import { image6 } from "../../assets";
import { empatyCart } from "../../assets";

export const Cart = () => {
  return (
    <div>
      {/* <div className="cart-case">
        <h1>Products In My Cart Is (0)</h1>
        <img
          className="emapty-cart-img"
          src={empatyCart}
          alt="emapty cart message"
        />
        <center>

        <NavLink to="/product-listing">
          <button className="button">
            <span>Shop Now!! </span>
          </button>
        </NavLink>
        </center>
      </div> */}
      <section className="cart-page-detail-case">
        <div className="single-card-wrap">
        <div className="single-card">
          <img
            src={image6}
            alt="new bedsheets new designs"
            className="single-card-img"
          />
          <div className="card-rightside">
            <h2 className="card-heading">this is the set</h2>
            <div className="product-price">
              <h2>₹ 8900</h2> <p>₹ 9812</p>
            </div>
            <div className="product-quantity">
              <p>Quantity:</p>
              <FontAwesomeIcon
                icon={faSquareMinus}
                size="xl"
                className="qty-logo"
              />
              <h4>0</h4>
              <FontAwesomeIcon
                icon={faSquarePlus}
                size="xl"
                className="qty-logo"
              />
            </div>
            <button className="card-btn">Move To Wishlist</button>
            <button className="card-btn remove-card-btn">
              Remove From Cart
            </button>
          </div>
        </div>
        </div>
      <div className="card-price-detail">
        <div className="coupon-case">
         <p>
         <FontAwesomeIcon icon={faTag} size="sm" />
          Have A Coupon?
         </p>
          <button className="hrd-login-btn">Apply</button>
        </div>
        <h2 className="price-details">Price details</h2>
        <div className="price-string-number">

        <div className="price-strings">
          <p>Price [3 items]</p>
          <p>Discount</p>
          <p>Delivery Chaeges</p>
          <p>Coupon Discount</p>
        </div>
        <div className="price-numbers">
          <p>₹ 900</p>
          <p>-₹ 590</p>
          <p>FREE</p>
          <p>₹ 0.00</p>
        </div>
        </div>
        <div className="total-amount-case">
          <h2>Total Amount</h2>
          <h2>₹ 370.00</h2>
        </div>
        <p className="discount-price">you will save ₹.... on this order</p>
        <button className="login-btns checkout-btn">Checkout</button>
      </div>
      </section>

    </div>
  );
};
