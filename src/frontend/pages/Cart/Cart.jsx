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
import "../../pages/Home/Home.css";
import "../Authentication/authentication.css";
import { empatyCart } from "../../assets";
import { useContext, useState } from "react";
import { productContext } from "../../hooks/context/productsContext";

export const Cart = () => {
  const [isCoupanApplied, setIsCoupanApplied] = useState(false);
  const {
    cart,
    setProductDispatch,
    isAddedIntoWishList,
    priceOfProductsWithQuantity,
    discounts,
    totalPrice,
    coupanApplyOnTotalAmount,
    deleteCartItem,
    incrementCartItems,
    obtainAddItemToWishListApi
  } = useContext(productContext);

  const invokeOnCoupanApply = () => {
    setIsCoupanApplied(!isCoupanApplied);
    setProductDispatch({ type: "COUPAN_APPLIED", payload: totalPrice - 5 });
  };
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
                qty,
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
                      <h2>₹ {price}</h2>
                      <p className="card-pre-price">₹ {prePrice}</p>
                    </div>
                    <div className="product-price">
                      <h4 className="discount-price">{discount}</h4>
                    </div>
                    <div className="product-quantity">
                      <p>Quantity:</p>
                      <button
                        className={
                          qty <= 1 ? "not-alowed" : "qty-logo not-alowed-btn"
                        }
                        disabled={qty <= 1}
                        onClick={() => {
                          incrementCartItems(_id, "decrement");
                          toast.error("Quantity Decreased", {className:"toast-styling"});
                        }}
                      >
                        <FontAwesomeIcon icon={faSquareMinus} size="xl" />
                      </button>
                      <h4>{qty}</h4>
                      <button className="not-alowed-btn">
                        <FontAwesomeIcon
                          icon={faSquarePlus}
                          size="xl"
                          className="qty-logo"
                          onClick={() => {
                            incrementCartItems(_id, "increment");
                            toast.success("Quantity Increased", {
                              className: "toast-styling",
                            });
                          }}
                        />
                      </button>
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
                          
                          obtainAddItemToWishListApi(item)
                          deleteCartItem(_id)
                         
                        }}
                      >
                        Move To Wishlist
                      </button>
                    )}

                    <button
                      className="card-btn remove-card-btn"
                      onClick={() => deleteCartItem(_id)}
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
              <button
                onClick={invokeOnCoupanApply}
                className="hrd-login-btn"
                id="unalowed-btn"
              >
                {isCoupanApplied ? "Applied" : "Apply"}
              </button>
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
                <p>₹ 5</p>
              </div>
            </div>
            <div className="total-amount-case">
              <h2>Total Amount</h2>
              <h2>
                ₹{isCoupanApplied ? coupanApplyOnTotalAmount : totalPrice}
              </h2>
            </div>
            <p className="discount-price">
              you will save ₹ {discounts} on this order
            </p>
            <Link to="/checkout">
              <button className="login-btns checkout-btn">Checkout</button>
            </Link>
          </div>
        </section>
      )}
    </div>

  );
};

export { Cart as default };
