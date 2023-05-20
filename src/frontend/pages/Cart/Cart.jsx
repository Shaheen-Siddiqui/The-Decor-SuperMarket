import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

//internal imports
import "./Cart.css";
import { empatyCart } from "../../assets";
import { useContext, useEffect, useState } from "react";
import { productContext } from "../../hooks/context/productsContext";

export const Cart = () => {
  const { cart, setProductDispatch, isAddedIntoWishList } =
    useContext(productContext);

  const priceOfProductsWithQuantity = cart.reduce(
    (acc, { prePrice, quantity }) => (acc = acc + Number(prePrice)) * quantity,
    0
  );

  const discounts = (priceOfProductsWithQuantity * 45) / 100;
  const totalPrice = priceOfProductsWithQuantity - discounts;

  return (
    <div>
      <center>
        <h1>Products In My Cart Is {`(${cart.length})`}</h1>
      </center>
      {!cart.length ? (
        <div className="cart-case">
          <img
            className="emapty-cart-img"
            src={empatyCart}
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
        <section className="cart-page-detail-case">
          <div className="single-card-wrap">
            {cart.map((item) => {
              const {
                prePrice,
                category,
                price,
                productImg,
                quantity,
                _id,
                discount,
              } = item;
              return (
                <div className="single-card" key={_id}>
                  <img
                    src={productImg}
                    alt="new bedsheets new designs"
                    className="single-card-img"
                  />
                  <div className="card-rightside">
                    <h2 className="card-heading">{category}</h2>
                    <div className="product-price">
                      <h2>₹ {price}</h2>{" "}
                      <p className="card-pre-price">₹ {prePrice}</p>
                    </div>
                    <div className="product-price">
                      <h4 className="discount-price">{discount}</h4>
                    </div>
                    <div className="product-quantity">
                      <p>Quantity:</p>
                      <FontAwesomeIcon
                        icon={faSquareMinus}
                        size="xl"
                        className="qty-logo"
                        onClick={() =>
                          {setProductDispatch({
                            type: "PRODUCT_QUANTITY_DECREMENT",
                            payload: item,
                          })
                          toast.error("You Have Decreased Quantity",{className:"toast-styling"})
                        }
                        }
                      />
                      <h4>{quantity}</h4>
                      <FontAwesomeIcon
                        icon={faSquarePlus}
                        size="xl"
                        className="qty-logo"
                        onClick={() => {
                          setProductDispatch({
                            type: "PRODUCT_QUANTITY_INCREMENT",
                            payload: item,
                          });
                          toast.success("You Have Increased Quantity", {
                            className: "toast-styling",
                          });
                        }}
                      />
                    </div>
                    {isAddedIntoWishList(item) ? (
                      <Link to="/wish-list">
                        <button className="card-btn">
                          ℹ️tem is Already In Wishlist
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="card-btn"
                        onClick={() => {
                          setProductDispatch({
                            type: "MOVE_ITEM_TO_WISHLIST",
                            payload: item,
                          });
                          toast.success("Moved To WishList", {
                            className: "toast-styling",
                          });
                        }}
                      >
                        Move To Wishlist
                      </button>
                    )}

                    <button
                      className="card-btn remove-card-btn"
                      onClick={() => {
                        setProductDispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                        toast.error("Romoved From Cart", {
                          className: "toast-styling",
                        });
                      }}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              );
            })}
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
                <p>Price [{`${cart.length}`} items]</p>
                <p>Discount</p>
                <p>Delivery Chaeges</p>
                <p>Coupon Discount</p>
              </div>
              <div className="price-numbers">
                <p>₹ {priceOfProductsWithQuantity}</p>
                <p>-₹ {discounts}</p>
                <p>FREE</p>
                <p>₹ 30%</p>
              </div>
            </div>
            <div className="total-amount-case">
              <h2>Total Amount</h2>
              <h2>₹ {totalPrice}</h2>
            </div>
            <p className="discount-price">
              you will save ₹ {discounts} on this order
            </p>
            <button className="login-btns checkout-btn">Checkout</button>
          </div>
        </section>
      )}
    </div>
  );
};

export {Cart as default}
