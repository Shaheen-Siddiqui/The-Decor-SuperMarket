import "./Cart.css";
import { empatyCart } from "../../assets";

export const Cart = () => {
  return (
    <>
      <div className="cart-case">
        <h1>Products In My Cart Is (0)</h1>
        <img
          className="emapty-cart-img"
          src={empatyCart}
          alt="emapty cart message"
        />
      </div>
    </>
  );
};
