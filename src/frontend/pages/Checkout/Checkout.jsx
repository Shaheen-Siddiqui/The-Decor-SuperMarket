import { useContext } from "react";

//internal imports
import "../Cart/Cart.css";
import "../UserProfile/UserProfile.css";
import "./Checkout.css";
import { productContext } from "../../hooks/context/productsContext";

export const Checkout = () => {
  const {
    cart,
    priceOfProductsWithQuantity,
    discounts,
    totalPrice,
    productsName,
    obtainUserAddress,
    setProductDispatch,

    setDeleverAddress: {
      userName,
      hoseNumber,
      city,
      state,
      countaryName,
      postalCode,
      mobileNumber,
    },
    setDeleverAddress,
  } = useContext(productContext);
  return (
    <div className="checkout-main-case">
      <div className="left-address-case" id="radio-check-address">
        {obtainUserAddress.map(
          (
            {
              userName,
              hoseNumber,
              city,
              state,
              countaryName,
              postalCode,
              mobileNumber,
            },
            index
          ) => {
            return (
              <div className="address-case" key={index}>
                <label>
                  <input
                    name="address-radio"
                    type="radio"
                    onChange={(event) =>
                      setProductDispatch({
                        type: "SELECTED_INPUT_ADDRESS",
                        payload: index,
                      })
                    }
                  />
                  &nbsp;&nbsp;&nbsp;
                  <strong className="radio-usename-select">{userName}</strong>
                  <div className="address-value">
                    <p>
                      {hoseNumber} / {state}
                    </p>
                    <p>
                      {city} &nbsp; {postalCode}
                    </p>
                    <p> {countaryName}</p>
                    <p> {mobileNumber}</p>
                  </div>
                </label>
              </div>
            );
          }
        )}
      </div>
      <div id="checkout-detail-case">
        <div className="total-amount-case">
          <h2>Item Name</h2>
          <h2>Quantity</h2>
        </div>

        <div id="checkout-item-box">
          {productsName.map(({ title, quantity }, index) => {
            return (
              <div className="price-string-number" key={index}>
                <div className="price-strings">
                  <p>{title}</p>
                </div>
                <div className="price-numbers">
                  <p> {quantity}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="total-amount-case">
          <h2>PRICE DETAIL:-</h2>
        </div>

        <div className="price-string-number">
          <div className="price-strings">
            <p>Price [{`${cart.length}`} items]</p>
            <p>Discount</p>
            <p>Delivery Chaeges</p>
          </div>
          <div className="price-numbers">
            <p>₹ {priceOfProductsWithQuantity}</p>
            <p>-₹ {discounts}</p>
            <p>FREE</p>
          </div>
        </div>

        <div className="total-amount-case">
          <h2>Total Amount</h2>
          <h2>₹ {totalPrice}</h2>
        </div>

        <div className="place-order-case">
          <p>
            <strong className="username-text">{userName}</strong>
            <u>
              <strong className="assress-text">ADDRESS</strong>
            </u>
          </p>
          <p>
            {hoseNumber}, {state},{city}, {countaryName},{postalCode},
            {mobileNumber}
          </p>
        </div>
        <div className="place-order-btncase">
          <button className="place-order-btn">Place &nbsp; Order</button>
        </div>
      </div>
    </div>
  );
};

export { Checkout as default };
